import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Header, Left, Body, Title, Icon, Button, Right } from 'native-base';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import api from '../../services/api';
import BotaoRetangular from '../../components/botao-retangular'

export default function Principal({ navigation: { goBack } }) {

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
        <View style={styles.content}>
            <View style={styles.objetivo}>
                <BotaoRetangular
                title="Adicionar objetivo"
                onPress={() => {navigation.navigate('CadastrarObjetivo')}}/>
            </View>
            <Text style={styles.saldo}>R$ 102,03</Text>
            <Text style={styles.subTitle}>Disponível para investimento</Text>
            <Text style={styles.cashback}>Cashback acumulado: R$ 17,25</Text>
            <View style={styles.investimentosContainer}>
                <Text style={styles.tituloInvest}>Investimento 1</Text>
                <Text style={styles.rendimento}>+ 0,00 acumulado</Text>
                <Text style={styles.rendimento}>+ 0,00 rendimento</Text>
                <Divider style={ styles.divider}/>
                <Button  style={ styles.botaoInvestimento}
                onPress={() => {navigation.navigate('ObjetivoAlcancado')}}>
                    <Text style={styles.tituloInvest}>Investimento 2</Text>
                    <View style={{flexDirection: 'row', width: '100%',}}>
                        <View>
                            <Text style={styles.rendimento}>+ 950,00 acumulado</Text>
                            <Text style={styles.rendimento}>+ 50,00 rendimento</Text>
                        </View>
                        <Icon name="md-checkmark-circle" style={{marginLeft:100, color:'green'}} />
                    </View>
                </Button>
                <Divider style={ styles.divider}/>
                <Text style={styles.tituloInvest}>Fundo emergencial</Text>
                <Text style={styles.rendimento}>+ 0,00 acumulado</Text>
                <Text style={styles.rendimento}>+ 0,00 rendimento</Text>
                <Divider style={ styles.divider}/>
                <Text style={styles.tituloInvest}>Dívida 1</Text>
                <Text style={styles.rendimento}>+ 0,00 acumulado</Text>
                <Text style={styles.rendimento}>+ 0,00 rendimento</Text>
            </View>
        </View>
  </View>
    );
}