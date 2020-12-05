import React from 'react';
//import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './style';
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    
    const login = route.params.login;

    // const message = `Ola ${login.name}, estou entrando em contato pois gostaria de ajudar no caso "${login.title}", com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(login.value)}`;

    // function navigateBack() {
    //     navigation.goBack();
    // }

    // function sendEmail() {
    //     MailComposer.composeAsync({
    //         subject: `Heroi do caso: ${login.title}`,
    //         recipients: [login.email],
    //         body: message,
    //     });
    // }

    // function sendWhatsapp() {
    //     Linking.openURL(`whatsapp://send?text=${message}&phone=${login.whatsapp}`);
    // }

    return(
        <View style={styles.container}>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
            <Text>oi</Text>
        </View>
    );
}