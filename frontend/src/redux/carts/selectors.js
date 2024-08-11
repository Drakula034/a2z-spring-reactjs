export const totalCartItemQuantity = (state) => state.cart?.totalCart;
export const cartItems = (state) => state.cart?.cartItems;
export const totalCartItemsOfProduct = (productId, state) =>
  state?.cart
    ?.filter((item) => item.productId === productId)
    .reduce((total, item) => total + item.quantity, 0);
