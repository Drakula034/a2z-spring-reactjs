import { useMutation, useQueryClient } from "react-query";

import { addProductOverView as addProductOverViewApi } from "../../services/api/product-service/products";
import toast from "react-hot-toast";
const useAddProductOverView = () => {
  const queryClient = useQueryClient();
  const { mutate: addProductOverView, isLoading: isProductOverViewAdding } =
    useMutation((data) => addProductOverViewApi(data), {
      onSuccess: () => {
        toast.success("Product Over View added successfully");
        queryClient.invalidateQueries("productsByPage");
      },
      onError: () => {
        toast.error("Unable to add Product Over View");
      },
    });

  return { addProductOverView, isProductOverViewAdding };
};

export default useAddProductOverView;
