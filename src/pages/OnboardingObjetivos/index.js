import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements";
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
      <Image source={{uri: '../../assets/onboard.png'}} style={{ width: 299, height: 169 }} />
      
      <Text style={styles.titulo}>Vamos investir no seu futuro</Text>
      <Text style={styles.titulo}>
        Processamos seus dados e identificamos seu perfi financeiro. Cadastre
        seus objetivos financeiros.
      </Text>
      <BotaoRetangular
        title="PAGAR DIVIDAS"
        onPress={() => {
          navigation.navigate("Principal");
        }}
      />
      <BotaoRetangular
        title="FUNDO EMERGENCIAL"
        onPress={() => {
          navigation.navigate("Principal");
        }}
      />
      <BotaoRetangular
        title="OUTRO OBJETIVO"
        onPress={() => {
          navigation.navigate("Principal");
        }}
      />
    </View>
  );
}
