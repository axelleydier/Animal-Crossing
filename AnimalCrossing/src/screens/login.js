import React from 'react';
import {Text, View} from 'react-native';
import { AddBasket } from '../components/button';

const Login = ({navigation}) => {
  return (
    <View>
      <AddBasket onPress={() => navigation.navigate('Store')}
        label="Connect"
      />
    </View>
  );
};

export default Login;