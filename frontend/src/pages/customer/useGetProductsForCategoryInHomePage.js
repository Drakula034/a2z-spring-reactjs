import { useQuery } from "react-query";

import { getProductsForCustomerMainPage as getProductsForCustomerMainPageApi } from "../../services/api/product-service/products";
function useGetProductsForCategoryInHomePage(categoryName) {
  const query = useQuery(
    ["useGetProductsForLaptopInHomePage", categoryName],
    () => getProductsForCustomerMainPageApi(categoryName),
    {
      keepPreviousData: true,
    }
  );

  return query;
}

export default useGetProductsForCategoryInHomePage;
