import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Detail from './pages/Detail';
import Identifier from './pages/Identifier';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Identifier" component={Identifier} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}