import UsersManagement from "../../features/users-management/UsersManagement";
import AdminHeader from "../../ui/admin/AdminHeader";

function UserPage() {
  console.log("working");
  return (
    <>
      <AdminHeader />
      <UsersManagement />
      <div>User Module</div>
    </>
  );
}

export default UserPage;
