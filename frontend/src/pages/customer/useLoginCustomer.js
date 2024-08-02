import { useMutation } from "react-query";
import { loginCustomer as loginCustomerApi } from "../../services/api/customer-service/customer";
import toast from "react-hot-toast";
function useLoginCustomer() {
  const {
    mutateAsync: loginCustomer,
    isLoading: loadingLoginCustomer,
    data: customerInfo,
  } = useMutation((customerInfo) => loginCustomerApi(customerInfo), {
    onSuccess: () => {
      toast.success("Logged in successfully");
    },
    onError: () => toast.error("Unable to login"),
  });

  return { loginCustomer, loadingLoginCustomer, customerInfo };
}

export default useLoginCustomer;
