import { View, SafeAreaView, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab2Screen = () => {
  return (
    <SafeAreaView style={ styles.globalMargin }>
      <Text style={ styles.globalTitle }>Icons</Text>

      <View style={ styles.globalSection }>
        <TouchableIcon iconName="airplane-outline"></TouchableIcon>
        <TouchableIcon iconName="attach-outline"></TouchableIcon>
        <TouchableIcon iconName="bonfire"></TouchableIcon>
        <TouchableIcon iconName="calculator"></TouchableIcon>
        <TouchableIcon iconName="chatbubble-ellipses-outline"></TouchableIcon>
        <TouchableIcon iconName='images-outline'></TouchableIcon>
        <TouchableIcon iconName='leaf-outline'></TouchableIcon>
      </View>

    </SafeAreaView>
  )
}