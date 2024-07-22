import { useMutation, useQueryClient } from "react-query";
import { updateProductOverView as updateProductOverViewDataApi } from "../../services/api/product-service/products";
import toast from "react-hot-toast";

const useUpdateProductOverview = () => {
  const queryClient = useQueryClient();
  const {
    mutate: updateProductOverView,
    isLoading: isUpdateProductOverViewLoading,
  } = useMutation(
    ({ data, productId }) => updateProductOverViewDataApi(data, productId),
    {
      onSuccess: (productId) => {
        toast.success(
          `Product overview for productId ${productId} updated successfully`
        );
        queryClient.invalidateQueries("productsByPage");
      },
      onError: (productId) => {
        toast.error(
          `Unable to update product overview for productId ${productId}`
        );
      },
    }
  );

  return {
    updateProductOverView,
    isUpdateProductOverViewLoading,
  };
};

export default useUpdateProductOverview;
