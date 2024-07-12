import { Outlet, Route, Routes } from "react-router-dom";
import ProductManagement from "../../features/products-management/ProductManagement";
import AdminHeader from "../../ui/admin/AdminHeader";
import AddProduct from "../../features/products-management/AddProduct";
import EditProduct from "../../features/products-management/EditProduct";

function ProductsPage() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route index element={<ProductManagement />} />
        <Route path="create" element={<AddProduct />} />
        <Route path="edit" element={<EditProduct />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default ProductsPage;
