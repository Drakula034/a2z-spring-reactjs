import { Outlet, Route, Routes } from "react-router-dom";
import UsersManagement from "../../features/users-management/UsersManagement.jsx";
import AdminHeader from "../../ui/admin/AdminHeader.jsx";
import AddUser from "../../features/users-management/AddUser.jsx";
import EditUser from "../../features/users-management/EditUser.jsx";

export const UsersPage = () => {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route index element={<UsersManagement />} />
        <Route path="create" element={<AddUser />} />
        <Route path="edit" element={<EditUser />} />
      </Routes>
      <Outlet />
    </>
  );
};
