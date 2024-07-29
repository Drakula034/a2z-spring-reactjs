import { useQuery } from "react-query";
import { getProductByProductId as getProductByProductIdApi } from "../../services/api/product-service/products";

function useGetProductByProductId(productId) {
  const query = useQuery(
    ["getProductByProductId", productId],
    () => getProductByProductIdApi(productId),
    {
      keepPreviousData: true,
    }
  );
  return query;
}

export default useGetProductByProductId;
