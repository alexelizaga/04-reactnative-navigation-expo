import { View, Text, Button, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../theme/appTheme";
import { useEffect } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({ navigation }: Props) => {
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
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate("Page2Screen")}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 18
      }}>Navegar con argumentos</Text>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={[
            styles.lgBtn,
            {
              backgroundColor: "#5856D6",
            },
          ]}
          onPress={() =>
            navigation.navigate("PersonScreen", {
              id: 1,
              name: "Pedro",
            })
          }
        >
          <Text style={styles.lgBtnText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.lgBtn,
            {
              backgroundColor: "#FF9427",
            },
          ]}
          onPress={() =>
            navigation.navigate("PersonScreen", {
              id: 2,
              name: "María",
            })
          }
        >
          <Text style={styles.lgBtnText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
