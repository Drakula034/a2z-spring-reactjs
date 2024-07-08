import { useQuery } from "react-query";
import { getUserById } from "../../services/api/user-services/userApi";

function useGetUserById(userId) {
  const user = useQuery(["userById", userId], () => getUserById(userId));

  return user;
}

export default useGetUserById;
