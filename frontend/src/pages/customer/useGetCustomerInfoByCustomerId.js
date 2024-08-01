import { useQuery } from "react-query";
import { getCustomerInfoForMainPage } from "../../services/api/customer-service/customer";

const useGetCustomerInfoByCustomerId = (customerId) => {
  const query = useQuery(
    ["getCustomerInfoByCustomerId", customerId],
    () => getCustomerInfoForMainPage(customerId),
    { keepPreviousData: true, enabled: !!customerId }
  );
  // console.log("queryData", query.data);
  return query;
};

export default useGetCustomerInfoByCustomerId;
