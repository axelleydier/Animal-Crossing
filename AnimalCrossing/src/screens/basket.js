import React, { useState } from 'react';
import {Text, View} from 'react-native';
import {AddBasket} from '../components/button';
import {useFocusEffect} from '@react-navigation/native'
import getBasket from '../components/utils/getBasket';
import Article from '../components/article';
import { ScrollView } from 'react-native-gesture-handler';

const Basket = () => {
  const[basket, setBasket] = useState([]);

  useFocusEffect(() => {
    const getLocalBasket = async () => {
      const basketLocal = await getBasket();
      setBasket(basketLocal);
    };
    getLocalBasket();
  });

  return (
    <ScrollView>
    {basket.map(basket => (
      <Article
      key={basket.name['file-name']}
      img={basket.image_uri}
      title={basket.name['name-EUfr']}
      price={basket.price + ' po'}/>
    ))}
    </ScrollView>
  );
};

export default Basket;