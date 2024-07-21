import { Route, Routes } from "react-router-dom";
import { Title } from "../../ui/AdminFormStyles";
import ProductFormHeader from "../../ui/ProductFormHeader";
import EditProductOverViewForm from "./EditProductOverViewForm";
import EditProductDescriptionForm from "./EditProductDescriptionForm";
import EditProductImagesForm from "./EditProductImagesForm";
import EditProductDetailsForm from "./EditProductDetailsForm";
import EditProductShippingForm from "./EditProductShippingForm";

function EditProduct() {
  return (
    <>
      <Title>{"Edit Product"}</Title>
      <ProductFormHeader />
      <Routes>
        <Route index element={<EditProductOverViewForm />} />
        <Route path="overview" element={<EditProductOverViewForm />} />
        <Route path="description" element={<EditProductDescriptionForm />} />
        <Route path="images" element={<EditProductImagesForm />} />
        <Route path="details" element={<EditProductDetailsForm />} />
        <Route path="shipping" element={<EditProductShippingForm />} />
      </Routes>
    </>
  );
}

export default EditProduct;
