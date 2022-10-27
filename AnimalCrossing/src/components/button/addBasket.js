import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, label}) => {
  return (
    
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles= StyleSheet.create({

    button:{
        backgroundColor:'orange',
    },
  
    text:{
      fontSize:20,
      color:'black',
      fontWeight:'bold',
      textAlign: 'center'
    },
  });

export default Button;