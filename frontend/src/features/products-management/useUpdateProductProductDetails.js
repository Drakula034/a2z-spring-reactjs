import { useMutation, useQueryClient } from "react-query";
import { updateProductProductDetails as updateProductProductDetailsApi } from "../../services/api/product-service/products";
import toast from "react-hot-toast";
const useUpdateProductProductDetails = () => {
  const queryClient = useQueryClient();
  const {
    mutate: updateProductProductDetails,
    isLoading: isUpdateProductProductDetailsLoading,
  } = useMutation(
    ({ data, productId }) => updateProductProductDetailsApi(data, productId),
    {
      onSuccess: (_, productId) => {
        toast.success(
          `Product updated successfully for productId ${productId}`
        );
        queryClient.invalidateQueries("productsByPage");
      },
      onError: (_, productId) => {
        toast.error(`Unable to update product for productId ${productId}`);
      },
    }
  );
  return {
    updateProductProductDetails,
    isUpdateProductProductDetailsLoading,
  };
};

export default useUpdateProductProductDetails;
