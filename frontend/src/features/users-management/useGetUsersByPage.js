import { useQuery } from "react-query";
import { getUsersByPage } from "../../services/api/user-services/userApi";

function useGetUsersByPage(page) {
  const query = useQuery(["usersByPage", page], () => getUsersByPage(page), {
    keepPreviousData: true,
  });
  return query;
}

export default useGetUsersByPage;
