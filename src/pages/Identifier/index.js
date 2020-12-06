import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoRetangular from '../../components/botao-retangular'
import BotaoRedondo from '../../components/botao-redondo'
import BotaoBack from '../../components/botao-back'
import Lista from '../../components/lista'


import api from '../../services/api';

export default function Identifier() {
 const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]

    return(
        <View style={styles.container} >
            <Text>Identificamos algumas dívidas.Vamos liquidar isso?</Text>
            
        </View>
    );
}