import { useMutation } from "react-query";
import { decreaseProductFromCart as decreaseProductFromCartApi } from "../../../services/api/cart-service/carts";
import toast from "react-hot-toast";

function useDecreaseProductFromCart() {
  const { mutateAsync: decreaseProductFromCart } = useMutation(
    async ({ customerId, productId, changeQuantity }) => {
      const response = await decreaseProductFromCartApi(
        customerId,
        productId,
        changeQuantity
      );

      if (typeof response === "string") {
        return response; // Plain text response
      } else if (response && response.message) {
        return response.message; // JSON response with a message
      } else {
        throw new Error("Unexpected response format");
      }
    },
    {
      onSuccess: (message) => {
        toast.success(message); // Show success message
      },
      onError: (error) => {
        toast.error(error.message); // Show error message based on status
      },
    }
  );

  return decreaseProductFromCart;
}

export default useDecreaseProductFromCart;
