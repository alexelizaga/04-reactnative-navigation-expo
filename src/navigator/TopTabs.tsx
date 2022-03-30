import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, TouchableOpacity } from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import { AlbumsScreen } from "../screens/AlbumsScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { ContactsScreen } from "../screens/ContactScreen";
import { colors } from "../theme/appTheme";
import { DrawerScreenProps } from "@react-navigation/drawer";

interface Props extends DrawerScreenProps<any, any> {}

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {

  return (
    <Tab.Navigator
      style={{
        backgroundColor: "white",
      }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: "transparent",
          elevation: 0,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: any = "";
          switch (route.name) {
            case "ChatScreen":
              iconName = "chatbubbles-outline";
              break;
            case "ContactsScreen":
              iconName = "people-outline";
              break;
            case "AlbumsScreen":
              iconName = "images-outline";
              break;
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="ChatScreen"
        options={{ title: "Chat" }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{ title: "Contacts" }}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{ title: "Albums" }}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
