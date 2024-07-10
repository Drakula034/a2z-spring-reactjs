import { useQuery } from "react-query";
import { getBrandCount } from "../../services/api/product-service/brands";

const useBrandsCount = () => {
  const query = useQuery("brandsCount", () => getBrandCount());
  // console.log(query);
  return query;
};
export default useBrandsCount;
