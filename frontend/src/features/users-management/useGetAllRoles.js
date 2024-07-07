import { useQuery } from "react-query";
import { getAllRoles } from "../../services/api/user-services/rolesApi";

function useGetAllRoles() {
  return useQuery("getAllRoles", () => getAllRoles());
}

export default useGetAllRoles;
