import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customers/customerSlice";

const store = configureStore({
  reducer: { customer: customerReducer },
});

export { store };
