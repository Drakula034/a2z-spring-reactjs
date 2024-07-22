import { useLocation, useParams } from "react-router-dom";
import ProductOverviewForm from "../../ui/ProductForm/ProductOverviewForm";
import { useQuery } from "react-query";
import useGetProductOverviewData from "./useGetProductOverviewData";
import useUpdateProductOverview from "./useUpdateProductOverView";

function EditProductOverViewForm() {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search); // Use location.search
  // const productId = queryParams.get("productId");
  const { productId } = useParams();
  const { data } = useGetProductOverviewData(productId);
  const { updateProductOverView } = useUpdateProductOverview();
  //   console.log(queryParams.get("productId"));
  //   console.log("data", data);
  const handleOverviewFormSubmit = (data, productId) => {
    // console.log("data", data);
    // console.log("productId", productId);
    const brandName = data?.productBrands?.label || null; // Direct access since it's an object
    const categoryName = data?.productCategories?.label || null;
    const productOverViewData = {
      name: data.productName,
      alias: data?.alias || "",
      brandName: brandName,
      categoryName: categoryName,
      enabled: data?.enabled || false,
      inStock: data?.inStock || false,
      cost: data?.cost || 0,
      price: data?.listPrice || 0,
      discountPercent: data?.discount || 0,
    };
    updateProductOverView({ data: productOverViewData, productId });
  };
  return (
    <ProductOverviewForm
      productOverviewData={data}
      formType={"edit"}
      onSubmit={handleOverviewFormSubmit}
    />
  );
}

export default EditProductOverViewForm;
