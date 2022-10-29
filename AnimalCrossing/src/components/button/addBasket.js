import React from 'react';
import styled from 'styled-components';

const Button = ({onPress, label}) => {
  return (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
  );
};

const TouchableOpacity= styled.TouchableOpacity`
  width: 100%;
  height: 25px;
  background-color: orange;
  align-items: center;
  justify-content: center;
`;

const Text= styled.Text`
  font-size: 20px;
  font-weight:bold;
  color: black;
`;

export default Button;