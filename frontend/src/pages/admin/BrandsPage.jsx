import { Outlet, Route, Routes } from "react-router-dom";
import BrandManagement from "../../features/brands-management/BrandManagement";
import AdminHeader from "../../ui/admin/AdminHeader";
import EditBrand from "../../features/brands-management/EditBrand";
import AddBrand from "../../features/brands-management/AddBrand";

function BrandsPage() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route index element={<BrandManagement />} />
        <Route path="edit" element={<EditBrand />} />
        <Route path="create" element={<AddBrand />} />
      </Routes>
      {/* <BrandManagement /> */}
      <Outlet />
    </>
  );
}

export default BrandsPage;
