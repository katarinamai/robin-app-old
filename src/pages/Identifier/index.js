import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoRetangular from '../../components/botao-retangular'
import BotaoRedondo from '../../components/botao-redondo'
import BotaoBack from '../../components/botao-back'


import api from '../../services/api';

export default function Identifier() {


    return(
        <View style={styles.container} >
            <Text>Identificamos algumas dívidas.Vamos liquidar isso?</Text>
            <BotaoRetangular
            title="oisedoven\sldvek"/>
            <BotaoRedondo/>
            <BotaoBack/>
        </View>
    );
}