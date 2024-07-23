import { useParams } from "react-router-dom";
import ProductShippingForm from "../../ui/ProductForm/ProductShippingForm";
import useGetProductShippingDetails from "./useGetProductShippingDetails";
import useUpdateProductShippingDetails from "./useUpdateProductShippingDetails";

function EditProductShippingForm() {
  const { productId } = useParams();
  const { data: settingsData } = useGetProductShippingDetails(productId);
  const { updateProductShippingDetails } = useUpdateProductShippingDetails();
  // console.log(settingsData);
  const handleProductSetting = (data) => {
    const prepareSettingData = {
      length: parseInt(data?.length, 10) || 0,
      width: parseInt(data?.width, 10) || 0,
      height: parseInt(data?.height, 10) || 0,
      weight: parseInt(data?.weight, 10) || 0,
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
