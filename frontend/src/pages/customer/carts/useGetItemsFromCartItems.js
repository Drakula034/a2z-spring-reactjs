import { useQuery } from "react-query";

import { getCartItems as getCartItemsApi } from "../../../services/api/cart-service/carts";
function useGetItemsFromCartItems(customerId) {
  return useQuery(["getItemsFromCartItems", customerId], () =>
    getCartItemsApi(customerId)
  );
}

export default useGetItemsFromCartItems;
