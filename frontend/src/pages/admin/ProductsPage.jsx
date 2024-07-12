import { Outlet, Route, Routes } from "react-router-dom";
import ProductManagement from "../../features/products-management/ProductManagement";
import AdminHeader from "../../ui/admin/AdminHeader";

function ProductsPage() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route index element={<ProductManagement />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default ProductsPage;
