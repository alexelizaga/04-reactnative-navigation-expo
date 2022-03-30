import { Text, SafeAreaView } from 'react-native'
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {

  return (
    <SafeAreaView style={ styles.globalMargin }>
      <Text style={ styles.globalTitle }>Tab 1</Text>
    </SafeAreaView>
  )
}