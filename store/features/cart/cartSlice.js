import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveCart, loadCart } from '../../services/storage';

const initialState = {
  items: [],
};

export const loadCartFromStorage = createAsyncThunk(
  'cart/loadFromStorage',
  async () => await loadCart()
);


const cartSlice = createSlice({
    extraReducers: (builder) => {
  builder.addCase(loadCartFromStorage.fulfilled, (state, action) => {
    state.items = action.payload;
  });
},
  name: 'cart',
  initialState,
  reducers: {
addToCart: (state, action) => {
  const existingItem = state.items.find(item => item.id === action.payload.id);
  if (existingItem) {
    existingItem.quantity += action.payload.quantity;
  } else {
    state.items.push(action.payload);
  }
  saveCart(state.items);
},
clearCart: (state) => {
  state.items = [];
  saveCart([]);
}
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
