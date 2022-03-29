import { View, Image, TouchableOpacity, Text, useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { StackSettings } from './StackSettings';
import { styles } from '../theme/appTheme';

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
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
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
            onPress={ () => navigation.navigate('StackNavigator') }
          >
            <Text style={ styles.lateralMenuOptionText }>Navegation Stack</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.lateralMenuOption }
            onPress={ () => navigation.navigate('StackSettings') }
          >
            <Text style={ styles.lateralMenuOptionText }>Settings Stack</Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}