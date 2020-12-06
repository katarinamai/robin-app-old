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

    header: {
        backgroundColor: '#F7931E',
        
    },
    content: {
        alignItems: 'center',
    },
    objetivo: {
        width:200,
        marginTop:30,
    },
    saldo: {
        color: '#F7931E',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1,
        fontSize: 36,
        marginTop:50,
    },
    subTitle: {
        color: '#a8a8a8',
    },
    cashback: {
        color: '#F7931E',
    },
    investimentosContainer: {
        width: '70%',
        marginLeft: 20,
        marginTop:30,
        height: '55%',
        justifyContent: 'space-between', 
    },
    tituloInvest: {
        fontSize: 20,
        alignItems: 'flex-start',
    },
    rendimento: {
        color: '#F7931E',
    },
    botaoInvestimento: {
        flexDirection: 'column',
        height:70,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius:0,
        elevation:0,
        alignItems: 'flex-start',
    }
});