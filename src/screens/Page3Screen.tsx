import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Page3Screen = ( { navigation }:Props ) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title } >Page3Screen</Text>

      <Button
        title='Ir página 1'
        onPress={ () => navigation.popToTop() }
      />
    </View>
  )
}