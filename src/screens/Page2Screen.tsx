import { StackScreenProps } from '@react-navigation/stack'
import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};

export const Page2Screen = ( { navigation }:Props ) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: ''
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title } >Page2Screen</Text>

      <Button
        title='Ir página 3'
        onPress={ () => navigation.navigate('Page3Screen') }
      />
    </View>
  )
}