import React from 'react';
import {Text, View} from 'react-native';
import Article from '../components/article';

const Store = ({navigation}) => {
  return (
    <View style={{ flex: 1}}>
      <Article img={require('../assets/images/article.png')} title= "Tête de Néfertitif" price="200 po"/>
    </View>
  );
};

export default Store;