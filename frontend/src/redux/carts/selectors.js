export const totalCartItemQuantity = (state) => state.cart?.totalCart;
export const cartItems = (state) => state.cart?.cartItems;
// selectors.js
// export const totalCartItemsOfProduct = (productId) => (state) => {
//   return state?.cart
//     ?.filter((item) => item.productId === productId)
//     .reduce((total, item) => total + item.quantity, 0);
// };

// selectors.js
export const totalCartItemsOfProduct = (productId) => (state) => {
  const cart = state?.cart?.cartItems || []; // Default to an empty array if cart is undefined or null
  return Array.isArray(cart)
    ? cart
        .filter((item) => item.productId === productId)
        .reduce((total, item) => total + item.quantity, 0)
    : 0;
};
