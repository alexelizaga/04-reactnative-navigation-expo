import { View, Text, Button, useWindowDimensions } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useEffect } from "react";

interface Props extends DrawerScreenProps<any, any> {}

export const SettingsScreen = ({ navigation }: Props) => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: !isLargeScreen
        ? () => (
            <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
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
