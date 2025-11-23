import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      {state.items.length === 0 && alert("Cart is already Empty.")}
      state.items.length = 0;
    },
  },
});

// basically ** createSlice ** will return an object which will look like this
// {
//     action: {
//         addItems,
//         removeItem,
//         clearCart
//     },
//     reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
