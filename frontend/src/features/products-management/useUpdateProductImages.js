import { useMutation } from "react-query";
import { updateProductImages as updateProductImagesApi } from "../../services/api/product-service/products";
import toast from "react-hot-toast";

const useUpdateProductImages = () => {
  const {
    mutate: updateProductImages,
    isLoading: isUpdateProductImagesLoading,
  } = useMutation(
    ({ data, productId }) => updateProductImagesApi(data, productId),
    {
      onSuccess: (_, productId) => {
        toast.success(
          `Product images updated successfully for productId ${productId}`
        );
      },
      onError: (_, productId) => {
        toast.error(
          `Unable to update product images for productId ${productId}`
        );
      },
    }
  );
  return {
    updateProductImages,
    isUpdateProductImagesLoading,
  };
};

export default useUpdateProductImages;
