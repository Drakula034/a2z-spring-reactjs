import { useMutation, useQueryClient } from "react-query";
import { createUser as createUserApi } from "../../services/api/user-services/userApi";
import toast from "react-hot-toast";
const useCreateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: createUser, isLoading: isUserCreating } = useMutation(
    (data) => createUserApi(data),
    {
      onSuccess: (data) => {
        toast.success(
          "User with email: " + data.email + "created successfully"
        );
        queryClient.invalidateQueries("usersByPage");
      },
      onError: (error) => {
        toast.error(
          "Unable to delete the user because of this error: " + error.message
        );
      },
    }
  );

  return { createUser, isUserCreating };
};

export default useCreateUser;
