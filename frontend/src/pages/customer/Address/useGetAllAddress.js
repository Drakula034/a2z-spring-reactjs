import { useQuery } from "react-query";
import { getAllAddressOfCustomer as getAllAddressOfCustomerApi } from "../../../services/api/customer-service/address";

function useGetAllAddress(customerId) {
  return useQuery(["getAllAddress", customerId], () =>
    getAllAddressOfCustomerApi(customerId)
  );
}

export default useGetAllAddress;
