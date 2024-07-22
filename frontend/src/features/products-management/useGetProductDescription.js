import { useQuery } from "react-query";
import { getProductDescription } from "../../services/api/product-service/products";

const useGetProductDescription = (productId) => {
  const query = useQuery(["getProductDescription", productId], () =>
    getProductDescription(productId)
  );
  return query;
};
export default useGetProductDescription;
