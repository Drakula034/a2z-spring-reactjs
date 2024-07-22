import { useQuery } from "react-query";

import { getProductAllImages as getProductImagesApi } from "../../services/api/product-service/products";
const useGetProductImages = (productId) => {
  const query = useQuery(["getProductImages", productId], () =>
    getProductImagesApi(productId)
  );

  return query;
};

export default useGetProductImages;
