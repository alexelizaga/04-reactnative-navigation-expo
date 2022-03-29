import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// import { BasicLateralMenu } from './src/navigator/BasicLateralMenu';
// import { Tabs } from './src/navigator/Tabs';
import { LateralMenu } from './src/navigator/LateralMenu';


export default function App() {
  return (
    <NavigationContainer>
      {/* <BasicLateralMenu /> */}
      {/* <Tabs /> */}
      <LateralMenu />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

