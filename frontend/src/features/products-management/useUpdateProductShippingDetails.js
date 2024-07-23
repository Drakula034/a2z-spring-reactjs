import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { updateProductShippingDetails as updateProductShippingDetailsApi } from "../../services/api/product-service/products";
const useUpdateProductShippingDetails = () => {
  const queryClient = useQueryClient();
  const {
    mutate: updateProductShippingDetails,
    isLoading: isProductShippingDetailsUpdating,
  } = useMutation(
    ({ data, productId }) => updateProductShippingDetailsApi(data, productId),
    {
      onSuccess: (_, productId) => {
        toast.success(
          `Product shipping details updated successfully for productId ${productId}`
        );
        queryClient.invalidateQueries("productsByPage");
      },
      onError: (_, productId) => {
        toast.error(
          `Unable to update product shipping details for productId ${productId}`
        );
      },
    }
  );

  return {
    updateProductShippingDetails,
    isProductShippingDetailsUpdating,
  };
};

export default useUpdateProductShippingDetails;
