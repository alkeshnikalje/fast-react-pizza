import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // pizza object will be the payload
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    // pizzaId will be the payload
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },

    // pizzaId will be the payload
    increaseQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );

      pizza.quantity++;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },

    // pizzaId will be the payload
    decreaseQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );

      pizza.quantity--;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
      if (pizza.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const getTotalQuantity = (store) =>
  store.cart.cart.reduce((sum, item) => (sum += item.quantity), 0);

export const getTotalPrice = (store) =>
  store.cart.cart.reduce((sum, item) => (sum += item.totalPrice), 0);

export default cartSlice.reducer;
