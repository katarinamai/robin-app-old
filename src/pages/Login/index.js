import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoQuadrado from '../../components/botao-quadrado'

import api from '../../services/api';

export default function Login() {

    // const [login, setLogin] = useState();
    const navigation = useNavigation();


    return(
        <View style={styles.container} >
            <View style={styles.content}>
                <Image source={logoImg} style={styles.logo} />
                <Input
                placeholder='e-mail'
                />
                <Input
                    placeholder='senha'
                    secureTextEntry={true}
                />
                <BotaoQuadrado
                    title="ENTRAR"
                    onPress={() => {navigation.navigate('Loading')}}
                />
                <Button
                    buttonStyle={{
                        backgroundColor: "transparent",
                    }}
                    titleStyle={{
                        color:'black'
                    }}
                    containerStyle={{marginTop:150}}
                    title="Criar Conta"
                    onPress={() => {navigation.navigate('Cadastro')}}
                />
            </View>
        </View>
    );
}