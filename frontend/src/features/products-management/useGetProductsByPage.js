import { useQuery } from "react-query";
import { getProductsByPage } from "../../services/api/product-service/products";

const useGetProductsByPage = (page) => {
  const query = useQuery(
    ["productsByPage", page],
    () => getProductsByPage(page),
    {
      keepPreviousData: true,
    }
  );

  return query;
};

export default useGetProductsByPage;
