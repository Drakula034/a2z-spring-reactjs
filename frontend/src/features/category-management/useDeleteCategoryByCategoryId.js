import { useMutation, useQueryClient } from "react-query";
import { deleteCategoryById } from "../../services/api/product-service/category";
import toast from "react-hot-toast";

const useDeleteCategoryByCategoryId = () => {
  const queryClient = useQueryClient();
  const {
    mutate: deletingCategoryByCategoryId,
    isLoading: isCategoryDeletingByCategoryId,
  } = useMutation((categoryId) => deleteCategoryById(categoryId), {
    onSuccess: (_, categoryId) => {
      toast.success(
        "Category with category Id: " + categoryId + " deleted successfully"
      );
      queryClient.invalidateQueries("categoryByPage");
    },
    onError: (_, categoryId) => {
      toast.error("Unable to deleteCategory with category Id: " + categoryId);
    },
  });
  return { deletingCategoryByCategoryId, isCategoryDeletingByCategoryId };
};

export default useDeleteCategoryByCategoryId;
