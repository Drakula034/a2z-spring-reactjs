import { Route, Routes } from "react-router-dom";
import ProductFormHeader from "./ProductFormHeader";
import styled from "styled-components";
import ProductOverviewForm from "./ProductForm/ProductOverviewForm";
import ProductDescriptionForm from "./ProductForm/ProductDescriptionForm";
import ProductImagesForm from "./ProductForm/ProductImagesForm";
import ProductDetailsForm from "./ProductForm/ProductDetailsForm";
import ProductShippingForm from "./ProductForm/ProductShippingForm";

const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem;
`;
function ProductForm() {
  return (
    <>
      <Title>{"Add Product"}</Title>
      <ProductFormHeader />
      <Routes>
        <Route index element={<ProductOverviewForm />} />
        <Route path="overview" element={<ProductOverviewForm />} />
        <Route path="description" element={<ProductDescriptionForm />} />
        <Route path="images" element={<ProductImagesForm />} />
        <Route path="details" element={<ProductDetailsForm />} />
        <Route path="shipping" element={<ProductShippingForm />} />
      </Routes>
    </>
  );
}

export default ProductForm;
