import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import BotaoBack from "../../components/botao-back";
import BotaoRetangular from "../../components/botao-retangular";

export default function Loading({ navigation: { goBack } }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.loading}>
          <Text style={styles.title}>Processando seus dados...</Text>
        <ActivityIndicator size="large" color="#F7931E" />
      </View>
    </View>
  );
}
