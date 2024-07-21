import { useMutation, useQueryClient } from "react-query";
import { updateBrand as updateBrandApi } from "../../services/api/product-service/brands";
import toast from "react-hot-toast";

const useUpdateBrand = () => {
  const queryClient = useQueryClient();
  const { mutate: updateBrand, isLoading: isUpdateBrandLoading } = useMutation(
    ({ brandData, numericBrandId }) =>
      updateBrandApi(brandData, numericBrandId),
    {
      onSuccess: (brandId) => {
        toast.success(`Brand with brandId: ${brandId} updated successfully`);
        queryClient.invalidateQueries("brandsByPage");
      },
      onError: (brandId) => {
        toast.error(`Brand with brandId: ${brandId} failed to update`);
      },
    }
  );

  return { updateBrand, isUpdateBrandLoading };
};
export default useUpdateBrand;
