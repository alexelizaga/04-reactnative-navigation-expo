import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Page3Screen = ( { navigation }:Props ) => {
  return (
    <View style={ styles.globalMargin }>

      <Button
        title='Go to page 1'
        onPress={ () => navigation.popToTop() }
      />
    </View>
  )
}