import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Colors from '../../styles/colors';
export { Colors };

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: Colors.SECOND_BACKGROUND,
        alignItems: 'center',
    },

    back: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 90
    },
    list: {
        width: '100%',
    },
    cashback: {
        marginTop:50,
        marginBottom:50,
        color: '#F7931E',
    },
    content: {
        width: '90%',
        marginLeft: 10,

    },
    titulo: { 
        marginLeft:10,
        color: 'black',
        position: 'absolute',
        left:     200,
        top:      300,
    },
    titulo2: {
        opacity: 0.5, 
        color: 'black',
    },
    divida: {
        color: '#F7931E',
        fontSize:36,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1,
        marginBottom:30,
    },
    content: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    botoes: {
        height: '30%',
        justifyContent: 'space-between',
    }
});