import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoQuadrado from '../../components/botao-quadrado'
import Identifier from '../Identifier'

import api from '../../services/api';

export default function Login() {

    // const [login, setLogin] = useState();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    // function navigateToDetail(login) {
    //     navigation.navigate('Identifier', { login });
    // }


    return(
        <View style={styles.container} >
            <Input
             placeholder='e-mail'
             />
            <Input
                placeholder='senha'
                secureTextEntry={true}
             />
            <BotaoQuadrado
                title="ENTRAR"
                onPress={() => {navigation.navigate('Identifier')}}
            />
            
        </View>
    );
}