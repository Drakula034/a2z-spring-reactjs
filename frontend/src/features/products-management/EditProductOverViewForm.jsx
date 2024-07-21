import { useLocation, useParams } from "react-router-dom";
import ProductOverviewForm from "../../ui/ProductForm/ProductOverviewForm";

function EditProductOverViewForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Use location.search
  const productId = queryParams.get("productId");
  //   console.log(queryParams.get("productId"));
  return <ProductOverviewForm />;
}

export default EditProductOverViewForm;
