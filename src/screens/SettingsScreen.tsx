import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const SettingsScreen = ({ navigation }: Props) => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: !isLargeScreen
        ? () => (
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={ () => navigation.toggleDrawer() }
          >
            <Ionicons name="menu-outline" size={35} color={colors.primary} />
          </TouchableOpacity>
          )
        : () => <></>,
    });
  }, []);

  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};
