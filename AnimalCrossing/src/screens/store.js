import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View} from 'react-native';
import Article from '../components/article';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultImage from '../assets/images/article.png';
import { AddBasket } from '../components/button';
import { FlatList } from 'react-native-gesture-handler';

const Store = ({navigation}) => {
  const [fossils, setFossils] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getFossils();
    }, 1000)
  }, []);

  const getFossils = async () => {
    axios({
      method:'get',
      url:'https://acnhapi.com/v1/fossils',
    })
    .then(res => {
      console.log(res);
      setFossils(Object.values(res.data));
      setLoading(false);
    })
    
  };
  
  const isInBasket = async fossil => {};

  const AddOrRemoteToBasket = async article => {
    console.log(article);
    const basket = (await AsyncStorage.getItem('basket')) !== null
    ? JSON.parse(await AsyncStorage.getItem('basket'))
    : [];
    basket.push(article);

    const exist = await isInBasket(article);
    if(exist) {
      const newBasket = basket.filter(bask => bask.id !== article.id);
      await AsyncStorage.setItem('basket', JSON.stringify(newBasket));
    } else {
      await AsyncStorage.setItem('basket', JSON.stringify(basket));
    }
  };



  return (
    <View>
      <AddBasket label="Panier" onPress={() => navigation.navigate('Basket')}/>
        <FlatList
          data={fossils}
          keyExtractor={item => item.id}

          onEndReached={() => setPage(page + 1)}
          renderItem={({item}) => {
        return (
          <>
          <Article
            key={item.name['file-name']}
            img={item.image_uri}
            title={item.name['name-EUfr']}
            price={item.price + ' po'}
            onPress={() => AddOrRemoteToBasket(item)}/>
          </>
        );
      }}
    />
  </View> 
  );
};

export default Store;