import { useMutation, useQueryClient } from "react-query";
import { toggleCategoryEnabledStatus } from "../../services/api/product-service/category";
import toast from "react-hot-toast";

const useToggleCategoryEnabledStatus = () => {
  const queryClient = useQueryClient();
  const {
    mutate: togglingCategoryStatus,
    isLoading: isCategoryStatusToggling,
  } = useMutation((categoryId) => toggleCategoryEnabledStatus(categoryId), {
    onSuccess: () => {
      toast.success("Category enabled toggled successfully");
      queryClient.invalidateQueries("categoryByPage");
    },
    onError: () => {
      toast.error("Unable to edit category status");
    },
  });

  return { togglingCategoryStatus, isCategoryStatusToggling };
};

export default useToggleCategoryEnabledStatus;
