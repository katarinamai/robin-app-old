import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Detail from './pages/Detail';
import PagarDivida from './pages/PagarDivida';
import Divida from './pages/Divida';
import Principal from './pages/Principal';
import CadastrarObjetivo from './pages/CadastrarObjetivo';
import ObjetivoAlcancado from './pages/ObjetivoAlcancado';
import Cadastro from './pages/Cadastro';
import CadastrarBanco from './pages/CadastrarBanco';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="PagarDivida" component={PagarDivida} />
                <AppStack.Screen name="Divida" component={Divida} />
                <AppStack.Screen name="Principal" component={Principal} />
                <AppStack.Screen name="CadastrarObjetivo" component={CadastrarObjetivo} />
                <AppStack.Screen name="ObjetivoAlcancado" component={ObjetivoAlcancado} />
                <AppStack.Screen name="Cadastro" component={Cadastro} />
                <AppStack.Screen name="CadastrarBanco" component={CadastrarBanco} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}