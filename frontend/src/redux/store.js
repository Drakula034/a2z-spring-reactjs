import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customers/customerSlice";
import cartReducer from "./carts/cartSlice";
const store = configureStore({
  reducer: { customer: customerReducer, cart: cartReducer },
});

export { store };
