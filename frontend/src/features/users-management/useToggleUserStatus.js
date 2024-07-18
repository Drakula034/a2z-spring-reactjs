import { useMutation, useQueryClient } from "react-query";
import { editUserEnabledStatus } from "../../services/api/user-services/userApi";
import toast from "react-hot-toast";

const useToggleUserStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: togglingUserStatus, isLoading: isUserStatusToggling } =
    useMutation((userId) => editUserEnabledStatus(userId), {
      onSuccess: () => {
        toast.success("User status toggled successfully");
        queryClient.invalidateQueries("usersByPage");
      },
      onError: () => {
        toast.error("Unable to toggle user status");
      },
    });
  return { togglingUserStatus, isUserStatusToggling };
};

export default useToggleUserStatus;
