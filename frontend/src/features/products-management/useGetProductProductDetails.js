import { useQuery } from "react-query";
import { getProductProductDetails as getProductProductDetailsApi } from "../../services/api/product-service/products";
const useGetProductProductDetails = (productId) => {
  const query = useQuery(
    ["getProductProductDetails", productId],
    () => getProductProductDetailsApi(productId),
    {
      keepPreviousData: true,
    }
  );

  return query;
};

export default useGetProductProductDetails;
