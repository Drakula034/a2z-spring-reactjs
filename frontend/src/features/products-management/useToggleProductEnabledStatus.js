import { useMutation, useQueryClient } from "react-query";
import { toggleProductEnabledStatus } from "../../services/api/product-service/products";
import toast from "react-hot-toast";

const useProductToggleEnabledStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: togglingProductStatus, isLoading: isProductStatusToggling } =
    useMutation((productId) => toggleProductEnabledStatus(productId), {
      onSuccess: () => {
        toast.success("Product enabled toggled successfully");
        queryClient.invalidateQueries("productsByPage");
      },
      onError: () => {
        toast.error("Unable to toggle product enabled status");
      },
    });

  return { togglingProductStatus, isProductStatusToggling };
};

export default useProductToggleEnabledStatus;
