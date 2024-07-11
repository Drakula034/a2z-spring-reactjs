import { useQuery } from "react-query";
import { getBrandsByPage } from "../../services/api/product-service/brands";

const useGetBrandByPage = (page) => {
  const query = useQuery(["brandsByPage", page], () => getBrandsByPage(page), {
    keepPreviousData: true,
  });

  return query;
};

export default useGetBrandByPage;
