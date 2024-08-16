import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to hold cart items
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // Add item to the cart
      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      // Remove item by filtering it out of the array
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      // Clear all items from the cart
      state.items = [];
    },
  },
});

// Export actions
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

// Export the reducer to be included in the store
export default cartSlice.reducer;