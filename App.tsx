import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// import { BasicLateralMenu } from './src/navigator/BasicLateralMenu';
import { LateralMenu } from './src/navigator/LateralMenu';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <BasicLateralMenu /> */}
        <LateralMenu />
      </AppState>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export const AppState = ({ children }:any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;