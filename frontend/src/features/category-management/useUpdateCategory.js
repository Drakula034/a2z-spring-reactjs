import { useMutation, useQueryClient } from "react-query";
import { updateCategory as updateCategoryApi } from "../../services/api/product-service/category";
import toast from "react-hot-toast";
const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const { mutate: updateCategory, isLoading: isUpdateCategoryLoading } =
    useMutation((data) => updateCategoryApi(data), {
      onSuccess: (data) => {
        toast.success(
          `Category with categoryId: ${data?.categoryId} updated successfully`
        );
        queryClient.invalidateQueries("categoriesByPage");
      },
      onError: (data) => {
        toast.error(
          `Unable to update category with categoryId ${data.categoryId}`
        );
      },
    });

  return { updateCategory, isUpdateCategoryLoading };
};

export default useUpdateCategory;
