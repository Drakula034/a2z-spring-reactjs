import { useMutation, useQueryClient } from "react-query";
import { addItemToCart as addItemToCartApi } from "../../../services/api/cart-service/carts";
import toast from "react-hot-toast";

function useAddProductToCart() {
  const queryClient = useQueryClient();
  const { mutateAsync: addProductToCart } = useMutation(
    ({ productId, customerId, quantity }) =>
      addItemToCartApi(customerId, productId, quantity),
    {
      onSuccess: () => {
        toast.success("Product added successfully");
        queryClient.invalidateQueries("getItemsFromCartItems");
      },
      onError: () => {
        toast.error("Unable to add product to cart");
      },
    }
  );

  return addProductToCart; // Ensure this is what you're returning
}

export default useAddProductToCart;
