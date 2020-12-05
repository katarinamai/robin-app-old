import React, { useState, useEffect } from 'react';
import { View, Image, Text, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from '../../services/api';

export default function Login() {
    

    return(
        <View>
            <Text>oi</Text>
            <Input
                placeholder='BASIC INPUT'
            />
        </View>
    );
}