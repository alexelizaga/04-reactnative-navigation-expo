import { SafeAreaView, Text } from 'react-native'
import { styles } from '../theme/appTheme';

export const Tab2Screen = () => {
  return (
    <SafeAreaView style={ styles.globalMargin }>
      <Text style={ styles.globalTitle }>Tab 2</Text>
    </SafeAreaView>
  )
}