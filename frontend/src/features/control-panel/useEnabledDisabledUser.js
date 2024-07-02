import { useQuery } from "react-query";
import { getEnabledDisabledUsers } from "../../services/api/user-services/userApi";

export function useEnabledDisabledUser() {
  return useQuery("enabledDisabledUserCount", getEnabledDisabledUsers);
}
