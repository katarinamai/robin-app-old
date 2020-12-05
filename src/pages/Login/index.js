import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';


import api from '../../services/api';

export default function Login() {

    const [login, setLogin] = useState();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    function navigateToDetail(login) {
        navigation.navigate('Detail', { login });
    }


    return(
        <View style={styles.container} >
            <Input
             placeholder='e-mail'
             />
            <Input
                placeholder='senha'
                secureTextEntry={true}
             />
            <Button
                title="ENTRAR"
                buttonStyle={{
                    backgroundColor: "#F7931E"
                 }}
                 onPress={() => navigation.navigate('Detail', { login })}
            />
            
        </View>
    );
}