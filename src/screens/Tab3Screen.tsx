import { SafeAreaView, Text } from 'react-native'
import { styles } from '../theme/appTheme';

export const Tab3Screen = () => {
  return (
    <SafeAreaView style={ styles.globalMargin }>
      <Text style={ styles.globalTitle }>Tab 3</Text>
    </SafeAreaView>
  )
}