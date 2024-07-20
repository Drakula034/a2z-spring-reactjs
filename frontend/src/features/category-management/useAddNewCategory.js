import { useMutation, useQueryClient } from "react-query";
import { createCategory as createCategoryApi } from "../../services/api/product-service/category";
import toast from "react-hot-toast";
const useAddNewCategory = () => {
  const queryClient = useQueryClient();
  const { mutate: addNewCategory, isLoading: isAddNewCategoryLoading } =
    useMutation((data) => createCategoryApi(data), {
      onSuccess: () => {
        toast.success("Category created successfully");
        queryClient.invalidateQueries("categoriesByPage");
      },
      onError: () => {
        toast.error("Unable to create category");
      },
    });

  return { addNewCategory, isAddNewCategoryLoading };
};

export default useAddNewCategory;
