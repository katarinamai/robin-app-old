import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoQuadrado from '../../components/botao-quadrado'

import api from '../../services/api';

export default function Cadastro() {

    // const [login, setLogin] = useState();
    const navigation = useNavigation();

    return(
        <View style={styles.container} >
            <View style={styles.content}>
                <Image source={logoImg} style={styles.logo} />
                <Text>Cadastre-se</Text>
                <Input
                placeholder='Como você se chama?'
                />
                <Input
                placeholder='e-mail'
                />
                <Input
                    placeholder='senha'
                    secureTextEntry={true}
                />
                <BotaoQuadrado
                    title="CADASTRAR"
                    onPress={() => {navigation.navigate('Login')}}
                />
                <Button
                    buttonStyle={{
                        backgroundColor: "transparent",
                    }}
                    titleStyle={{
                        color:'black'
                    }}
                    containerStyle={{marginTop:150}}
                    title="Já possui uma conta? Clique aqui."
                    onPress={() => {navigation.navigate('Login')}}
                />
            </View>
        </View>
    );
}