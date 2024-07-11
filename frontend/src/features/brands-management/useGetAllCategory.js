import { useQuery } from "react-query";
import { getAllCategory } from "../../services/api/product-service/category";

const useGetCategoryAll = () => {
  const query = useQuery("getAllCategoryByName", () => getAllCategory());
  return query;
};

export default useGetCategoryAll;
