import { createSelector } from "@reduxjs/toolkit";

export const selectCurrentCustomer = (state) => state.customer.currentCustomer;
export const currentCustomerCustomerId = (state) =>
  state.customer?.currentCustomer?.customerId;
