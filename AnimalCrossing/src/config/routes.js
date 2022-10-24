import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import Login from '../screens/login';
import Inscription from '../screens/inscription';
import Store from '../screens/store';
import Basket from '../screens/basket';

const Stack = createNativeStackNavigator();

const Routes = () => {


    return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Inscription" component={Inscription}/>
            <Stack.Screen name="Store" component={Store}/>
            <Stack.Screen name="Basket" component={Basket}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    };
    
    export default Routes;