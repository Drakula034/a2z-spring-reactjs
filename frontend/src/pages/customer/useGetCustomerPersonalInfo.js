import { useQuery } from "react-query";
import { getCustomerInfo as getCustomerInfoAPI } from "../../services/api/customer-service/customer";
function useGetCustomerPersonalInfo(customerId) {
  return useQuery(
    ["getCustomerPersonalInfo", customerId],
    () => getCustomerInfoAPI(customerId),
    {
      enabled: customerId !== undefined,
      keepPreviousData: true,
    }
  );
}

export default useGetCustomerPersonalInfo;
