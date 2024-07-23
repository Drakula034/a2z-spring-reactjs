import { useParams } from "react-router-dom";
import ProductDetailsForm from "../../ui/ProductForm/ProductDetailsForm";
import useGetProductProductDetails from "./useGetProductProductDetails";
import useUpdateProductProductDetails from "./useUpdateProductProductDetails";
function EditProductDetailsForm() {
  const { productId } = useParams();
  const { data: productDetailsData } = useGetProductProductDetails(productId);
  const { updateProductProductDetails } = useUpdateProductProductDetails();
  const handleProductProductDetailsFormSubmit = (data) => {
    const productDetails = data.map((detail) => {
      return {
        // name: detail?.inputName.trim(),
        // value: detail?.inputValue.trim(),
        // productId: productId,
        name: detail?.inputName ? detail.inputName.trim() : "", // Ensure inputName is not null or undefined
        value: detail?.inputValue ? detail.inputValue.trim() : "", // Ensure inputValue is not null or undefined
        productId: productId, // Ensure productId is defined and valid
      };
    });

    // console.log(data);
    console.log("preparedProductDetailsData", { productDetails });
    updateProductProductDetails({
      data: { productDetails },
      productId: productId,
    });
  };
  // console.log(productDetailsData);
  return (
    <ProductDetailsForm
      onSubmit={handleProductProductDetailsFormSubmit}
      productDetailsData={productDetailsData}
    />
  );
}

export default EditProductDetailsForm;
