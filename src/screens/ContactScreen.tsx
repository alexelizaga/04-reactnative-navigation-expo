import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { signIn, logout, authState: { isLoggedIn } } = useContext( AuthContext );

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.globalSubtitle }>Contacts</Text>

        {
          ( !isLoggedIn ) ? (
            <Button
              title='Sign In'
              onPress={ signIn }
            />
          ) : (
            <Button
              title='Sign Out'
              onPress={ logout }
            />
          )
        }   
        
    </View>
  )
}
