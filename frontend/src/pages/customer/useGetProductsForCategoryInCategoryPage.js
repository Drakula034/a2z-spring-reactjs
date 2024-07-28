import { useQuery } from "react-query";

import { getProductsForCategoryPage as getProductsForCategoryPageApi } from "../../services/api/product-service/products";
function useGetProductsForCategoryInCategoryPage(categoryName, categoryCnt) {
  const query = useQuery(
    ["useGetProductsForCategoryInCategoryPage", categoryName, categoryCnt],
    () => getProductsForCategoryPageApi(categoryName, categoryCnt),
    {
      keepPreviousData: true,
    }
  );

  return query;
}

export default useGetProductsForCategoryInCategoryPage;
