import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const data = sessionStorage.getItem("cartState");
    if (data == null) {
      return {
        cartItems: [],
        totalCart: 0,
      };
    } else {
      const parsedCartData = JSON.parse(data);
      return {
        cartItems: parsedCartData,
        totalCart: parsedCartData.reduce((sum, item) => sum + item.quantity, 0),
      };
    }
  } catch (err) {
    return {
      cartItems: [],
      totalCart: 0,
    };
  }
};

const initialState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM_TO_CART: (state, action) => {
      const { item } = action.payload;
      // Implement the logic to add the item to cartItems and update totalCart
      state.cartItems.push(item);
      state.totalCart += item.quantity;
    },
    SET_CART_STATE: (state, action) => {
      const { cartItems, totalCart } = action.payload;
      state.cartItems = cartItems;
      state.totalCart = totalCart;
    },
  },
});

export const { ADD_ITEM_TO_CART, SET_CART_STATE } = cartSlice.actions;
export default cartSlice.reducer;
