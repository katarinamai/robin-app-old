import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoBack from '../../components/botao-back';
import api from '../../services/api';
import DatePicker from 'react-native-datepicker';
import BotaoQuadrado from '../../components/botao-quadrado'


export default function Objective({ navigation: { goBack } }) {

    const navigation = useNavigation();
    const [user, setUser] = useState();

    return(
        <View style={styles.container} >
            <View style={styles.back}>
                <BotaoBack
                onPress={() => goBack()}/>
            </View>
            <Text style={styles.text} >R$ 345,35</Text>
            <View>
              <Text>Dê um nome para a dívida</Text>
              <Input
                placeholder='Dê um nome para o seu objetivo'
                defaultValue="Dívida 1"
              />
            </View>
            <DatePicker
              iconSource={""}
              style={{width: '100%'}}
              mode="date"
              placeholder="Data final do seu objetivo."
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
            <Text style={styles.text}>CASHBACK: R$ 17,25</Text>
            <BotaoQuadrado
                title="CADASTRAR"
                onPress={() => {navigation.navigate('Identifier')}}
            />
        </View>
    );
}