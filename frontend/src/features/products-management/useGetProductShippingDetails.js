import { useQuery } from "react-query";
import { getProductShippingDetails } from "../../services/api/product-service/products";

const useGetProductShippingDetails = (productId) => {
  const query = useQuery(
    ["getProductShippingDetails", productId],
    () => getProductShippingDetails(productId),
    { keepPreviousData: true }
  );

  return query;
};

export default useGetProductShippingDetails;
