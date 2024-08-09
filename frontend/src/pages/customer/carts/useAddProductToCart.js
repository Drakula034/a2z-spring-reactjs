import { useMutation } from "react-query";
import { addItemToCart as addItemToCartApi } from "../../../services/api/cart-service/carts";
import toast from "react-hot-toast";

function useAddProductToCart() {
  const { mutateAsync: addProductToCart } = useMutation(
    ({ productId, customerId, quantity }) =>
      addItemToCartApi(customerId, productId, quantity),
    {
      onSuccess: () => {
        toast.success("Product added successfully");
      },
      onError: () => {
        toast.error("Unable to add product to cart");
      },
    }
  );

  return addProductToCart; // Ensure this is what you're returning
}

export default useAddProductToCart;
