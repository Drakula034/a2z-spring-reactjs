import { Route, Routes } from "react-router-dom";
import ProductFormHeader from "./ProductFormHeader";
import styled from "styled-components";
import ProductImagesForm from "./ProductForm/ProductImagesForm";
import ProductDetailsForm from "./ProductForm/ProductDetailsForm";
import ProductShippingForm from "./ProductForm/ProductShippingForm";
import AddProductOverViewForm from "../features/products-management/AddProductOverViewForm";
import AddProductDescriptionForm from "../features/products-management/AddProductDescriptionForm";

const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem;
`;
function ProductForm() {
  const productId = false;
  return (
    <>
      <Title>{"Add Product"}</Title>
      <ProductFormHeader />
      <Routes>
        <Route index element={<AddProductOverViewForm />} />
        <Route path="overview" element={<AddProductOverViewForm />} />
        {/* <Route index element={<ProductOverviewForm />} />
        <Route path="overview" element={<ProductOverviewForm />} /> */}
        {productId && (
          <>
            <Route path="description" element={<AddProductDescriptionForm />} />
            <Route path="images" element={<ProductImagesForm />} />
            <Route path="details" element={<ProductDetailsForm />} />
            <Route path="shipping" element={<ProductShippingForm />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default ProductForm;
