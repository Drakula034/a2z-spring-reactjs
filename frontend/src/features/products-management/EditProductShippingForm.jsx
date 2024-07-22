import { useParams } from "react-router-dom";
import ProductShippingForm from "../../ui/ProductForm/ProductShippingForm";

function EditProductShippingForm() {
  const { productId } = useParams();
  return <ProductShippingForm />;
}

export default EditProductShippingForm;
