import Ionicons from '@expo/vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactScreen';
import { colors } from '../theme/appTheme';


const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {

  const { top:paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        backgroundColor: 'white',
        paddingTop
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route })=> ({
        tabBarActiveTintColor: colors.primary,
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0
        },
        tabBarIconStyle: {
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon:({ color, focused }) => {
          let iconName: any = '';
          switch( route.name ){
            case 'ChatScreen':
              iconName = 'chatbubbles-outline'
              break;
            case 'ContactsScreen':
              iconName = 'people-outline'
              break;
            case 'AlbumsScreen':
              iconName = 'images-outline'
              break;
          }
          // return <Text style={{ color }}>{ iconName }</Text>
          return <Ionicons name={iconName} size={20} color={color} />
        }
      }) }
    >
      <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ ChatScreen } />
      <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts' }} component={ ContactsScreen } />
      <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums' }} component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}