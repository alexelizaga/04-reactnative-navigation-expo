import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#5856D6',
    secondary: '',
    accent: ''
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    globalTitle: {
        fontSize: 30,
        marginBottom: 5
    },
    globalSubtitle: {
        marginVertical: 20,
        fontSize: 18
    },
    globalSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    globalItem: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10
    },
    globalItemText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    lateralMenuAvatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    lateralMenuAvatar: {
        width: 150,
        height: 150,
        borderRadius: 100,

    },
    lateralMenuOptionContainer: {
        marginVertical: 30,
        marginHorizontal: 30
    },
    lateralMenuOption: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    lateralMenuOptionText: {
        fontSize: 20,
        marginLeft: 5
    }
});