import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/appTheme';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: any
}

export const TouchableIcon = ( { iconName }:Props ) => {
    const { changeFavoriteIcon } = useContext( AuthContext );

    return (
        <TouchableOpacity
            onPress={ () => changeFavoriteIcon(iconName) }
        >
          <Ionicons name={ iconName } size={ 80 } color={ colors.primary }></Ionicons>
        </TouchableOpacity>
    )
}