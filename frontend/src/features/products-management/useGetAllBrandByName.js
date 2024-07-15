import { useQuery } from "react-query";
import { getAllBrandsNames } from "../../services/api/product-service/brands";

const useGetAllBrandByName = () => {
  const query = useQuery("getAllBrandByName", () => {
    return getAllBrandsNames();
  });
  // console.log(query);

  return query;
};

export default useGetAllBrandByName;
