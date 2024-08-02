import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const data = sessionStorage.getItem("customerInfo");
    if (data == null) {
      return {
        currentCustomer: {
          customerId: "",
          firstName: "",
        },
      };
    } else {
      return { currentCustomer: JSON.parse(data) };
    }
  } catch (err) {
    return {
      currentCustomer: {
        customerId: "",
        firstName: "",
      },
    };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.currentCustomer);
    sessionStorage.setItem("customerInfo", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const clearState = () => {
  try {
    sessionStorage.removeItem("customerInfo");
  } catch (err) {
    // Ignore errors
  }
};
const initialState = loadState();

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCurrentCustomer: (state, action) => {
      state.currentCustomer = action.payload;
      saveState(state); // Save the updated state to sessionStorage
    },
    logout: (state) => {
      state.currentCustomer = {
        customerId: "",
        firstName: "",
      };
      clearState(); // Clear sessionStorage
    },
  },
});

export const { setCurrentCustomer, logout } = customerSlice.actions;
export default customerSlice.reducer;
