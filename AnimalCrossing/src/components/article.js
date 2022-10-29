import React, { cloneElement } from 'react';
import {AddBasket} from '../components/button';
import styled from 'styled-components';

const Article= props => {
  return (
    <Square>
        <Image source={{uri:props.img}}/>
        <Text>{props.title}</Text>
        <Text>{props.price}</Text>
        <AddBasket label="Ajouter au panier" onPress={props.onPress}/>
    </Square>
  );
};

const Square= styled.View`
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Image= styled.Image`
  width:150px;
  height:200px;
`;

const Text= styled.Text`
  font-size: 20px;
  font-weight:bold;
  color: orange;
`;

export default Article;