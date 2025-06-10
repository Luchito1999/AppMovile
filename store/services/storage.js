import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCart = async (cartItems) => {
  try {
    await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error guardando carrito:", error);
  }
};

export const loadCart = async () => {
  try {
    const json = await AsyncStorage.getItem('cart');
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.error("Error cargando carrito:", error);
    return [];
  }
};
