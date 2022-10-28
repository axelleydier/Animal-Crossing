import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View} from 'react-native';
import Article from '../components/article';
import defaultImage from '../assets/images/article.png';
import { ScrollView } from 'react-native-gesture-handler';

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

  return (
    <ScrollView style={{ flex: 1}}>
      {fossils.map(fossil => {
      return(

        <Article
          key={fossil['file-name']}
          img={fossil.image_uri}
          title={fossil.name['name-EUfr']}
          price={fossil.price + ' po'}/>
      );
      })}
    </ScrollView>
  );
};

export default Store;