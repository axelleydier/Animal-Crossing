import React, { cloneElement } from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {AddBasket} from '../components/button';

const Article = () => {
  return (
    <View style={styles.borderstyle}>
        <Image source={require('../assets/images/article.png')} style={styles.articleImg}/>
        <Text style={styles.textstyle}>{title = "Tête de Néfertitif"}</Text>
        <AddBasket label="ok"/>
    </View>
  );
};

const styles= StyleSheet.create({

  borderstyle: {
    resizeMode:'contain',
    flex:0,
    width:200,
    height:200,
    backgroundColor: "black",
  },
  articleImg: {
    flex:1,
    width: undefined,
    height: undefined,
    resizeMode:'contain',
  },

  textstyle:{
    fontSize:20,
    color:'orange',
    fontWeight:'bold',
    textAlign: 'center'
  },
});

export default Article;