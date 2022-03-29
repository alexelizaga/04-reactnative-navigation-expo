import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';

export const BottomTabs = () => {

  return Platform.OS === 'android' ? <BottomTabsAndroid /> : <BottomTabsIOS /> 
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const BottomTabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={ ({ route })=> ({
        tabBarIcon:({ color, focused }) => {
          let iconName: any = '';
          switch( route.name ){
            case 'StackNavigator':
              iconName = 'home-outline'
              break;
            case 'Tab1Screen':
              iconName = 'bandage-outline'
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break;
            case 'Tab3Screen':
              iconName = 'bookmarks-outline'
              break;
          }
          return <Ionicons name={iconName} size={20} color={color} />
        }
      }) }
    >
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Navigator' }} component={StackNavigator} />
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={Tab2Screen} />
      <BottomTabAndroid.Screen name="Tab3Screen" options={{ title: 'Tab 3' }} component={Tab3Screen} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const BottomTabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route })=> ({
        headerShown: false,
        headerShadowVisible: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon:({ color, size, focused }) => {
          let iconName: any = '';
          switch( route.name ){
            case 'StackNavigator':
              iconName = 'home-outline'
              break;
            case 'Tab1Screen':
              iconName = 'bandage-outline'
              break;
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break;
            case 'Tab3Screen':
              iconName = 'bookmarks-outline'
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />
        }
      }) }
      
    >
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Navigator' }} component={StackNavigator} />
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={Tab2Screen} />
      <BottomTabIOS.Screen name="Tab3Screen" options={{ title: 'Tab 3' }} component={Tab3Screen} />
    </BottomTabIOS.Navigator>
  );
}