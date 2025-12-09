import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(i => i.id === item.id);

      if (exist) {
        exist.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }

      state.totalQty += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);

      if (!item) return;

      state.totalQty -= item.qty;
      state.totalPrice -= item.price * item.qty;
      state.items = state.items.filter(i => i.id !== id);
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);

      if (!item) return;

      item.qty -= 1;
      state.totalQty -= 1;
      state.totalPrice -= item.price;

      if (item.qty === 0) {
        state.items = state.items.filter(i => i.id !== id);
      }
    }
  }
});

export const { addToCart, removeFromCart, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
