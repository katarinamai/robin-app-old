import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Img from '../../assets/onboard.png';
import ImgBemVinde from '../../assets/bem_vinde.png';
import BotaoBack from "../../components/botao-back";
import BotaoRetangular from "../../components/botao-retangular";

export default function Onboarding1({ navigation: { goBack } }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={Img}/>
      <View style={styles.back}>
        <BotaoBack onPress={() => goBack()} />
      </View>
      <Image source={ImgBemVinde}/>
       <Button
          title="PULAR ETAPA"
          buttonStyle={styles.botao} 
          titleStyle={{alignItems: 'center',}}
          onPress={() => {navigation.navigate('Onboarding2')}}
        />
    </View>
  );
}
