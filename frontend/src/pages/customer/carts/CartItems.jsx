import CartItem from "./CartItem";
import useGetProductInfoForCart from "./useGetProductInfoForCart";

function CartItems({ cartProductItems }) {
  console.log("CartItems" + JSON.stringify(cartProductItems));
  const { data } = useGetProductInfoForCart(cartProductItems?.productId);
  console.log(data);
  return (
    <div>
      {(cartProductItems || [])?.map((cartItem, index) => {
        return <CartItem key={index} cartItem={cartItem} />;
      })}
    </div>
  );
}

export default CartItems;
