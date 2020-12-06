import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Img from '../../assets/onboard.png';
import styles from "./styles";
import BotaoBack from "../../components/botao-back";
import BotaoRetangular from "../../components/botao-retangular";

export default function OnboardingObjetivos({ navigation: { goBack } }) {
  const navigation = useNavigation();
  const [date, setDate] = useState("01-02-2021");

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <BotaoBack onPress={() => goBack()} />
      </View>
      <Image source={Img} style={{ width: 299, height: 169 }} />
      <View style={styles.titulo}>
        <Text >Vamos investir</Text>
        <Text>no seu futuro?</Text>
      </View>
          <View style={styles.content}>
            <Text> Processamos seus dados e </Text>
            <Text> identificamos seu perfil financeiro.</Text>
            <Text>Cadastre seus objetivos financeiros.</Text>
          </View>
          <View style={styles.botoes}>
            <BotaoRetangular
                title="PAGAR DIVIDAS"
                onPress={() => {
                navigation.navigate("PagarDivida");
                }}
            />
            <BotaoRetangular
                title="FUNDO EMERGENCIAL"
                onPress={() => {
                navigation.navigate("CadastrarObjetivo");
                }}
            />
            <BotaoRetangular
                title="OUTRO OBJETIVO"
                onPress={() => {
                navigation.navigate("CadastrarObjetivo");
                }}
            />
          </View>
      </View>
  );
}
