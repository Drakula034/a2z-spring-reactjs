import CartItem from "./CartItem";
import useGetProductInfoForCart from "./useGetProductInfoForCart";

function CartItems({ cartProductItems }) {
  return (
    <div>
      {(cartProductItems || [])?.map((cartItem, index) => {
        return <CartItem key={index} cartItem={cartItem} />;
      })}
    </div>
  );
}

export default CartItems;
