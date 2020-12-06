import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Detail from './pages/Detail';
import PagarDivida from './pages/PagarDivida';
import Divida from './pages/Divida';
import Principal from './pages/Principal';
import RegisterObjective from './pages/RegisterObjective';
import Goal from './pages/Goal';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="PagarDivida" component={PagarDivida} />
                <AppStack.Screen name="Divida" component={Divida} />
                <AppStack.Screen name="Principal" component={Principal} />
                <AppStack.Screen name="RegisterObjective" component={RegisterObjective} />
                <AppStack.Screen name="Goal" component={Goal} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}