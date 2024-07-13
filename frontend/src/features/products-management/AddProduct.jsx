import { Outlet } from "react-router-dom";
import ProductForm from "../../ui/ProductForm";

function AddProduct() {
  return (
    <>
      <ProductForm title={"Add Product"} />
      <Outlet />
    </>
  );
}

export default AddProduct;
