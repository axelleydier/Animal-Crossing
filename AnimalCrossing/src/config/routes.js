import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Inscription from '../screens/inscription';
import Store from '../screens/store';
import Basket from '../screens/basket';

const Stack = createNativeStackNavigator();

const Routes = () => {


    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Inscription" component={Inscription}/>
            <Stack.Screen name="Store" component={Store}/>
            <Stack.Screen name="Basket" component={Basket}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    };
    
    export default Routes;