import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import PagarDivida from './pages/PagarDivida';
import Divida from './pages/Divida';
import Principal from './pages/Principal';
import CadastrarObjetivo from './pages/CadastrarObjetivo';
import ObjetivoAlcancado from './pages/ObjetivoAlcancado';
import Cadastro from './pages/Cadastro';
import CadastrarBanco from './pages/CadastrarBanco';
import Onboarding2 from './pages/Onboarding2';
import Autenticacao from './pages/Autenticacao';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="PagarDivida" component={PagarDivida} />
                <AppStack.Screen name="Divida" component={Divida} />
                <AppStack.Screen name="Principal" component={Principal} />
                <AppStack.Screen name="CadastrarObjetivo" component={CadastrarObjetivo} />
                <AppStack.Screen name="ObjetivoAlcancado" component={ObjetivoAlcancado} />
                <AppStack.Screen name="Cadastro" component={Cadastro} />
                <AppStack.Screen name="CadastrarBanco" component={CadastrarBanco} />
                <AppStack.Screen name="Onboarding2" component={Onboarding2} />
                <AppStack.Screen name="Autenticacao" component={Autenticacao} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}