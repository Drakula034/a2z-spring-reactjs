import useGetProductInfoForCart from "./useGetProductInfoForCart";

function CartItem({ cartItem }) {
  //   console.log("CartItems" + JSON.stringify(cartItem));
  const { data: product } = useGetProductInfoForCart(cartItem?.productId);
  console.log(product);
  return <div>{cartItem?.quantity}</div>;
}

export default CartItem;
