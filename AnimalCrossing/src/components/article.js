import React, { cloneElement } from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {AddBasket} from '../components/button';

const Article = props => {
  return (
    <View style={styles.borderstyle}>
        <Image source={props.img} style={styles.articleImg}/>
        <Text style={styles.textstyle}>{props.title}</Text>
        <Text style={styles.textstyle}>{props.price}</Text>
        <AddBasket label="Ajouter au panier" onPress={() => console.error('Article Ajouté')}/>
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
    fontSize:15,
    color:'orange',
    fontWeight:'bold',
    textAlign: 'center'
  },
});

export default Article;