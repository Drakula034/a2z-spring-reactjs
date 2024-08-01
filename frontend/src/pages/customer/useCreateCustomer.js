import { useMutation, useQueryClient } from "react-query";
import { createNewCustomer as createNewCustomerApi } from "../../services/api/customer-service/customer";
import toast from "react-hot-toast";
function useCreateCustomer() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: createNewCustomer,
    isLoading: isCustomerCreatingLoading,
    data: customerId,
  } = useMutation((customerData) => createNewCustomerApi(customerData), {
    onSuccess: (data) => {
      toast.success("Customer created successfully");
      // queryClient.invalidateQueries("getCustomerInfoByCustomerId");
      // console.log("Customer created id", data);
      // return data;
    },
    onError: () => {
      toast.error("Unable to create customer");
    },
  });
  // console.log("customerIdInhooks", customerId);
  return { createNewCustomer, isCustomerCreatingLoading, customerId };
}

export default useCreateCustomer;
