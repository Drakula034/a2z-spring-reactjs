import { useParams } from "react-router-dom";
import ProductShippingForm from "../../ui/ProductForm/ProductShippingForm";
import useGetProductShippingDetails from "./useGetProductShippingDetails";
import useUpdateProductShippingDetails from "./useUpdateProductShippingDetails";

function EditProductShippingForm() {
  const { productId } = useParams();
  const { data: settingsData } = useGetProductShippingDetails(productId);
  const { updateProductShippingDetails } = useUpdateProductShippingDetails();
  console.log(settingsData);
  const handleProductSetting = (data) => {
    const prepareSettingData = {
      length: parseFloat(data?.length) || 0,
      width: parseFloat(data?.width) || 0,
      height: parseFloat(data?.height) || 0,
      weight: parseFloat(data?.weight) || 0,
    };

    console.log(prepareSettingData);
    updateProductShippingDetails({ data: prepareSettingData, productId });
  };
  return (
    <ProductShippingForm
      onSubmit={handleProductSetting}
      settingsData={settingsData}
    />
  );
}

export default EditProductShippingForm;
