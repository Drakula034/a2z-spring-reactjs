import { useQuery } from "react-query";
import { getProductInfoForCart as getProductInfoForCartAPI } from "../../../services/api/cart-service/carts";

function useGetProductInfoForCart(productId) {
  return useQuery(["getProductInfoForCart", productId], () =>
    getProductInfoForCartAPI(productId)
  );
}

export default useGetProductInfoForCart;
