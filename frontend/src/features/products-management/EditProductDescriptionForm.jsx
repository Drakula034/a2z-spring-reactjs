import { useLocation, useParams } from "react-router-dom";
import ProductDescriptionForm from "../../ui/ProductForm/ProductDescriptionForm";
import useGetProductDescription from "./useGetProductDescription";
import useUpdateProductDescription from "./useUpdateProductDescription";
function EditProductDescriptionForm() {
  const { productId } = useParams();
  const { data } = useGetProductDescription(productId);
  const { updateProductDescription } = useUpdateProductDescription();
  // console.log(data);
  const handleProductDescriptionUpdate = (data) => {
    // console.log(data);
    updateProductDescription({ data, productId });
  };
  return (
    <ProductDescriptionForm
      onSubmit={handleProductDescriptionUpdate}
      descriptionData={data}
    />
  );
}

export default EditProductDescriptionForm;
