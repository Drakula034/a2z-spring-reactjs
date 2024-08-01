import { createSelector } from "@reduxjs/toolkit";

export const selectCurrentCustomer = (state) => state.customer.currentCustomer;
