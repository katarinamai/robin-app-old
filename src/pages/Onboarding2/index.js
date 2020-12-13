import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Img from '../../assets/onboard.png';
import BotaoBack from "../../components/botao-back";
import BotaoRetangular from "../../components/botao-retangular";
import BotaoQuadrado from "../../components/botao-quadrado";

export default function OnboardingObjetivos({ navigation: { goBack } }) {
  const navigation = useNavigation();
  const [date, setDate] = useState("01-02-2021");

  return (
    <View style={styles.container}>
      <Image source={Img}/>
      <View style={styles.back}>
        <BotaoBack onPress={() => goBack()} />
      </View>
      <Text style={styles.titulo}>
        Cadastre sua conta bancária, para
        podermos acessar sua movimentação
        financeira dos últimos 3 meses e
        assim criarmos o seu perfil de
        investimentos.
      </Text>
      <Text style={styles.subTitulo}>    
        Iremos acessar somente como
        visualização e não teremos permissão
        para movimentar nenhum valor por você
      </Text>
      <View style={styles.cadastrar}>
        <BotaoRetangular
        title="Cadastrar Banco"
        onPress={() => {navigation.navigate('CadastrarBanco')}}
        />
      </View>
       <Button
          title="PULAR ETAPA"
          buttonStyle={styles.botao} 
          titleStyle={{alignItems: 'center',}}               
          onPress={() => goBack()}
        />
    </View>
  );
}
