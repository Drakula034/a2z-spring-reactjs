import { useQuery } from "react-query";
import { getCategoryByPage } from "../../services/api/product-service/category";

const useGetCategoryByPage = (page) => {
  const category = useQuery(
    ["categoryByPage", page],
    () => getCategoryByPage(page),
    { keepPreviousData: true }
  );
  return category;
};

export default useGetCategoryByPage;
