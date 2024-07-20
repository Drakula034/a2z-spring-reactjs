import { useMutation, useQueryClient } from "react-query";
import { deleteBrandById as deleteBrandByBrandIdApi } from "../../services/api/product-service/brands";
import toast from "react-hot-toast";

const useDeleteBrandByBrandId = () => {
  const queryClient = useQueryClient();
  const {
    mutate: deleteBrandByBrandId,
    isLoading: isDeleteBrandByBrandIdLoading,
  } = useMutation((brandId) => deleteBrandByBrandIdApi(brandId), {
    onSuccess: (brandId) => {
      toast.success(`Brand deleted successfully with Brand Id ${brandId}`);
      queryClient.invalidateQueries("brandsByPage");
    },
    onError: (brandId) => {
      toast.error(`Unable to delete brand with brandId ${brandId}`);
    },
  });

  return { deleteBrandByBrandId, isDeleteBrandByBrandIdLoading };
};

export default useDeleteBrandByBrandId;
