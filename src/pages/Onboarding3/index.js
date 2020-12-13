import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Img from '../../assets/onboard3.png';
import BotaoBack from "../../components/botao-back";
import BotaoRetangular from "../../components/botao-retangular";

export default function Onboarding3({ navigation: { goBack } }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={Img}/>
      <View style={styles.back}>
        <BotaoBack onPress={() => goBack()} />
      </View>
      <Text style={styles.titulo}>
        Faça um depósito e comece a usar
        já sua conta PaySmart.
      </Text>
      <Text style={styles.subTitulo}>    
        Você terá acesso ao cartão físico
      </Text>
      <Text style={styles.subTitulo}>    
        e virtual.
      </Text>
      <View style={styles.cadastrar}>
        <BotaoRetangular
        title="DEPOSITAR DINHEIRO"
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
