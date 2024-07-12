import { Outlet, Route, Routes } from "react-router-dom";
import CategoryManagement from "../../features/category-management/CategoryManagement";
import AdminHeader from "../../ui/admin/AdminHeader";
import EditCategory from "../../features/category-management/EditCategory";
import AddCategory from "../../features/category-management/AddCategory";

function CategoriesPage() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route index element={<CategoryManagement />} />
        <Route path="edit" element={<EditCategory />} />
        <Route path="/create" element={<AddCategory />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default CategoriesPage;
