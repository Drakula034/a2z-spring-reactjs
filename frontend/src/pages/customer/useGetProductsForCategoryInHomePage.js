import { useQuery } from "react-query";

import { getProductsForCustomerMainPage as getProductsForCustomerMainPageApi } from "../../services/api/product-service/products";
function useGetProductsForCategoryInHomePage(categoryName, categoryCnt) {
  const query = useQuery(
    ["useGetProductsForLaptopInHomePage", categoryName, categoryCnt],
    () => getProductsForCustomerMainPageApi(categoryName, categoryCnt),
    {
      keepPreviousData: true,
    }
  );

  return query;
}

export default useGetProductsForCategoryInHomePage;
