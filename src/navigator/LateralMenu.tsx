import { View, Image, TouchableOpacity, Text, useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackSettings } from './StackSettings';
import { styles, colors } from '../theme/appTheme';
import { BottomTabs } from './BottomTabs';
import { TopTabs } from './TopTabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible: false,
        drawerType: isLargeScreen ? 'permanent' : 'front',
        headerShown: false,
      }}
      drawerContent={ (props) => <MenuContent { ...props } /> }
    >
      <Drawer.Screen name="BottomTabs" component={ BottomTabs } />
      <Drawer.Screen name="TopTabs" component={ TopTabs } />
      <Drawer.Screen name="StackSettings" component={ StackSettings } />
    </Drawer.Navigator>
  );
}

const MenuContent = ( { navigation }: DrawerContentComponentProps ) => {

  return (
    <DrawerContentScrollView>

      <View style={ styles.lateralMenuAvatarContainer }>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }}
          style={ styles.lateralMenuAvatar }
        />
      </View>

      <View style={ styles.lateralMenuOptionContainer }>
          <TouchableOpacity
            style={ styles.lateralMenuOption }
            onPress={ () => navigation.navigate('BottomTabs') }
          >
            <Ionicons name="compass-outline" size={23} color={colors.primary} />
            <Text style={ styles.lateralMenuOptionText }>BottomTabs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.lateralMenuOption }
            onPress={ () => navigation.navigate('TopTabs') }
          >
            <Ionicons name="compass-outline" size={23} color={colors.primary} />
            <Text style={ styles.lateralMenuOptionText }>TopTabs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.lateralMenuOption }
            onPress={ () => navigation.navigate('StackSettings') }
          >
            <Ionicons name="settings-outline" size={23} color={colors.primary} />
            <Text style={ styles.lateralMenuOptionText }>Settings Stack</Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}