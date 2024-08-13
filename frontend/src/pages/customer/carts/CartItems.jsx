import CartItem from "./CartItem";
import useGetProductInfoForCart from "./useGetProductInfoForCart";

function CartItems({ cartProductItems, handlePriceDetails }) {
  return (
    <div>
      {(cartProductItems || [])?.map((cartItem, index) => {
        return (
          <CartItem
            key={index}
            cartItem={cartItem}
            handlePriceDetails={handlePriceDetails}
          />
        );
      })}
    </div>
  );
}

export default CartItems;
