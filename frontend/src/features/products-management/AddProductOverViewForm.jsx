import ProductOverviewForm from "../../ui/ProductForm/ProductOverviewForm";
import useAddProductOverView from "./useAddProductOverView";

function AddProductOverViewForm() {
  const { addProductOverView } = useAddProductOverView();
  const handleOverViewFormSubmit = (data) => {
    const category = data.productCategories.label;
    const brand = data.productBrands.label;
    const productOverViewData = {
      name: data.productName,
      alias: data?.productAlias || "",
      enabled: data?.enabled || false,
      inStock: data?.inStock || false,
      cost: data?.cost || 0,
      price: data?.listPrice || 0,
      discountPercent: data?.discount || 0,
      categoryName: category || "",
      brandName: brand || "",
    };
    // console.log(productOverViewData);

    addProductOverView(productOverViewData);
  };
  return (
    <ProductOverviewForm formType={"add"} onSubmit={handleOverViewFormSubmit} />
  );
}

export default AddProductOverViewForm;
