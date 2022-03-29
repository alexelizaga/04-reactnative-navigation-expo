import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../screens/SettingsScreen";

export type SettingsStackParams = {
  SettingsScreen: undefined;
};

const Stack = createStackNavigator<SettingsStackParams>();
export const StackSettings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        cardStyle: {
          backgroundColor: "white",
        }
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};
