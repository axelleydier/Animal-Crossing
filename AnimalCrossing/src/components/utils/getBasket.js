import AsyncStorage from '@react-native-async-storage/async-storage';

  const getBasket = async () => {
    const basketLocal = JSON.parse(await AsyncStorage.getItem('basket'));
    return basketLocal ? basketLocal: [];
  };

  export default getBasket;