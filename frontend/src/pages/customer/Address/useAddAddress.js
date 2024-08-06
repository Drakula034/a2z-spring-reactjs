import { useMutation } from "react-query";
import { addAddress as addAddressApi } from "../../../services/api/customer-service/address";
import toast from "react-hot-toast";

function useAddAddress() {
  const { mutateAsync: addAddress, isLoading: isAddressCreating } = useMutation(
    (addressInfo) => addAddressApi(addressInfo),
    {
      onSuccess: (data) => {
        toast.success(`Address added successfully with address id: ${data}`);
        console.log("after succesfully added: " + JSON.stringify(data));
      },
      onError: () => toast.error("Failed to add address"),
    }
  );

  return { addAddress, isAddressCreating };
}

export default useAddAddress;
