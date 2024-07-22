import { useMutation, useQueryClient } from "react-query";
import { updateProductDescription as updateProductDescriptionApi } from "../../services/api/product-service/products";
import toast from "react-hot-toast";
const useUpdateProductDescription = () => {
  const queryClient = useQueryClient();
  const {
    mutate: updateProductDescription,
    isLoading: isProductDescriptionUpdating,
  } = useMutation(
    ({ data, productId }) => {
      updateProductDescriptionApi(data, productId);
    },
    {
      onSuccess: (_, productId) => {
        toast.success(
          `Product description for productId ${productId} updated successfully`
        );
        queryClient.invalidateQueries("productsByPage");
      },
      onError: (_, productId) => {
        toast.error(
          `Unable to update product description for productId ${productId}`
        );
      },
    }
  );
  return {
    updateProductDescription,
    isProductDescriptionUpdating,
  };
};

export default useUpdateProductDescription;
