import { View, Text, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles, colors } from '../theme/appTheme';
import { useEffect } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({ navigation }: Props) => {
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
        : () => null,
    });
  }, []);

  return (
    <View style={ styles.globalMargin }>

      <Text style={ styles.globalSubtitle }>Navegar sin argumentos</Text>

      <View style={ styles.globalSection }>
        <TouchableOpacity
          style={[styles.globalItem, { backgroundColor: 'red' }]}
          onPress={ () => navigation.navigate("Page2Screen") }
        >
          <Text style={styles.globalItemText}>Page 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.globalItem, { backgroundColor: 'blue' }]}
          onPress={ () => navigation.navigate("Page3Screen") }
        >
          <Text style={styles.globalItemText}>Page 3</Text>
        </TouchableOpacity>
      </View>

      <Text style={{
        marginVertical: 20,
        fontSize: 18
      }}>Navegar con argumentos</Text>

      <View style={ styles.globalSection } >
        <TouchableOpacity
          style={[ styles.globalItem, { backgroundColor: "#5856D6" } ]}
          onPress={() =>
            navigation.navigate("PersonScreen", {
              id: 1,
              name: "Pedro",
            })
          }
        >
          <Text style={styles.globalItemText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[ styles.globalItem, { backgroundColor: "#FF9427" } ]}
          onPress={() =>
            navigation.navigate("PersonScreen", {
              id: 2,
              name: "María",
            })
          }
        >
          <Text style={styles.globalItemText}>María</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[ styles.globalItem, { backgroundColor: "#5856D6" } ]}
          onPress={() =>
            navigation.navigate("PersonScreen", {
              id: 3,
              name: "Juan",
            })
          }
        >
          <Text style={styles.globalItemText}>Juan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[ styles.globalItem, { backgroundColor: "#FF9427" } ]}
          onPress={() =>
            navigation.navigate("PersonScreen", {
              id: 4,
              name: "Pepe",
            })
          }
        >
          <Text style={styles.globalItemText}>Pepe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
