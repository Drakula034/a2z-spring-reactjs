import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

const useUpdateProductShippingDetails = () => {
  const queryClient = useQueryClient();
  const {
    mutate: updateProductShippingDetails,
    isLoading: isProductShippingDetailsUpdating,
  } = useMutation(
    ({ data, productId }) => updateProductShippingDetails(data, productId),
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
};

export default useUpdateProductShippingDetails;
