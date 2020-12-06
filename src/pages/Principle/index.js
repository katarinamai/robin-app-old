import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Header, Left, Body, Title, Icon, Button, Right } from 'native-base';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import api from '../../services/api';
import BotaoRetangular from '../../components/botao-retangular'

export default function Principle({ navigation: { goBack } }) {

    const navigation = useNavigation();

    return(
    <View>
        <Header androidStatusBarColor="#F7931E" style={styles.header} hasTabs>
        <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
        </Left>
        <Body>
            <Title>Início</Title>
        </Body>
        <Right>
        <Button transparent>
              <Icon name="search" />
            </Button>
        <Button transparent>
              <Icon name="notifications" />
            </Button>
        <Button transparent>
              <Icon name="share" />
            </Button>
        </Right>
        </Header>
        <View>
            <BotaoRetangular
            title="Adicionar objetivo"/>
            <Text>R$ 102,03</Text>
            <Text>Disponível para investimento</Text>
            <Text>Cashback acumulado: R$ 17,00</Text>
            <Text>Investimento 1</Text>
            <Text>+ 0,00</Text>
            <Divider style={ styles.divider}/>
            <Text>Investimento 2</Text>
            <Text>+ 0,00</Text>
            <Divider style={ styles.divider}/>
            <Text>Fundo emergencial</Text>
            <Text>+ 0,00</Text>
            <Divider style={ styles.divider}/>
            <Text>Dívida 1</Text>
            <Text>+ 0,00</Text>
        </View>
  </View>
    );
}