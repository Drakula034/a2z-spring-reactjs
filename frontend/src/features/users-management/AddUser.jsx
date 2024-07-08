import AddNewUser from "../../ui/AddNewUser";
import UserForm from "../../ui/UserForm";

function AddUser() {
  const handleOnSubmit = (data) => {
    console.log(data);
  };
  return <UserForm title={"Add New User"} onSubmit={handleOnSubmit} />;
}

export default AddUser;
