import { useMutation, useQueryClient } from "react-query";
import { updateUser as updateUserApi } from "../../services/api/user-services/userApi";
import toast from "react-hot-toast";

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUserUpdating } = useMutation(
    (data) => updateUserApi(data),
    {
      onSuccess: () => {
        toast.success("User updated successfully");
        queryClient.invalidateQueries("usersByPage");
      },
      onError: () => {
        toast.error("Unable to update user");
      },
    }
  );

  return { updateUser, isUserUpdating };
};

export default useUpdateUser;
