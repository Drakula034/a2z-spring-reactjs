import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCustomer: {},
};
const customerSlice = createSlice({
  name: "customer",
  initialState,

  reducer: {
    setCurrentCustomer: (state, action) => {
      return {
        ...state,
        currentCustomer: action.payload,
      };
    },
  },
});

export const { setCurrentCustomer } = customerSlice.actions;
export default customerSlice.reducer;
