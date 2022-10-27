import React from 'react';
import {Text, View} from 'react-native';
import Article from '../components/article';
import { AddBasket } from '../components/button';

const Login = ({navigation}) => {
  return (
    <View>
      <AddBasket onPress={() => navigation.navigate('Store')}
        label="To Store"
      />
    </View>
  );
};

export default Login;