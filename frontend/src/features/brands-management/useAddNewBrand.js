import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { createBrand as addBrandApi } from "../../services/api/product-service/brands";

const useAddNewBrand = () => {
  const queryClient = useQueryClient();
  const { mutate: addNewBrand, isLoading: isAddNewBrandLoading } = useMutation(
    (data) => addBrandApi(data),
    {
      onSuccess: (data) => {
        toast.success(
          `Brand with brandId: ${data?.brandId} added successfully`
        );
        queryClient.invalidateQueries("brandsByPage");
      },
      onError: (data) => {
        toast.error(`Unable to add brand with brandId ${data.brandId}`);
      },
    }
  );
  return { addNewBrand, isAddNewBrandLoading };
};

export default useAddNewBrand;
