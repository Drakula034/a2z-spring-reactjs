import { useMutation, useQueryClient } from "react-query";
import { deleteUserById } from "../../services/api/user-services/userApi";
import toast from "react-hot-toast";

const useDeleteByUserId = () => {
  const queryClient = useQueryClient();
  const { mutate: deletingUserByUserId, isLoading: isUserDeletingByUserId } =
    useMutation((userId) => deleteUserById(userId), {
      onSuccess: (_, userId) => {
        toast.success(`User with user Id: ${userId} deleted successfully`);
        queryClient.invalidateQueries("usersByPage");
      },
      onError: (_, userId) => {
        toast.error(`User with user Id: ${userId}) deletion failed`);
      },
    });

  return { deletingUserByUserId, isUserDeletingByUserId };
};

export default useDeleteByUserId;
