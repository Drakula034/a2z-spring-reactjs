import { useQuery } from "react-query";

import { getProductsForCustomerMainPage as getProductsForCustomerMainPageApi } from "../../services/api/product-service/products";
function useGetProductsForCategoryInHomePage(categoryName, categoryCnt) {
  const query = useQuery(
    ["useGetProductsForCategoryInHomePage", categoryName, categoryCnt],
    () => getProductsForCustomerMainPageApi(categoryName, categoryCnt),
    {
      keepPreviousData: true,
    }
  );

  return query;
}

export default useGetProductsForCategoryInHomePage;
