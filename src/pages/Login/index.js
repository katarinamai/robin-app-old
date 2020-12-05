import React, { useState, useEffect } from 'react';
import { View, Text,  } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';


import api from '../../services/api';

export default function Login() {
    

    return(
        <View style={styles.container} >
            <Text>Entrar</Text>
            <Input
             placeholder='e-mail'
             />
            <Input
             placeholder='senha'
             />
            
        </View>
    );
}