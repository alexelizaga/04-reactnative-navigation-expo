import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// import { BasicLateralMenu } from './src/navigator/BasicLateralMenu';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { LateralMenu } from './src/navigator/LateralMenu';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicLateralMenu /> */}
      <LateralMenu />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

