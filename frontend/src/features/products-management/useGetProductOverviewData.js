import { useQuery } from "react-query";
import { getOverViewDataByProductId } from "../../services/api/product-service/products";

const useGetProductOverviewData = (productId) => {
  const query = useQuery(["getProductOverviewData", productId], () =>
    getOverViewDataByProductId(productId)
  );
  return query;
};
export default useGetProductOverviewData;
