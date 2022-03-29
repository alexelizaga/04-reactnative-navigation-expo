import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackSettings } from './StackSettings';

const Drawer = createDrawerNavigator();

export const BasicLateralMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible: false,
        drawerType: 'front',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title:'StackNavigator' }} component={ StackNavigator } />
      <Drawer.Screen name="StackSettings" options={{ title:'SettingsScreen' }} component={ StackSettings } />
    </Drawer.Navigator>
  );
}