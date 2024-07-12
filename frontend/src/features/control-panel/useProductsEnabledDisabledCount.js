import { useQuery } from "react-query";
import { getEnabledDisabledProductCount } from "../../services/api/product-service/products";

const useProductsEnabledDisabledCount = () => {
  const query = useQuery("enabledDisabledProductCount", () =>
    getEnabledDisabledProductCount()
  );

  return query;
};

export default useProductsEnabledDisabledCount;
