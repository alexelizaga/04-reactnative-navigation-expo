import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useContext, useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

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
        : () => null,
    });
  }, []);

  const { authState } = useContext(AuthContext );

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.globalSubtitle }>Settings</Text>

      <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

      {
        (authState.favoriteIcon) && (
          <Ionicons
            name={ authState.favoriteIcon as any }
            size={ 150}
            color={ colors.primary }
          />
        )
      }
      
    </View>
  );
};
