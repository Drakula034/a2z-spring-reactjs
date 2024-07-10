import { useLocation } from "react-router-dom";
import UserForm from "../../ui/UserForm";

function EditUser() {
  const location = useLocation();
  const {
    state: { userToEdit },
  } = useLocation();
  console.log(userToEdit);
  const handleOnSubmit = (data) => {
    console.log(data);
    console.log(data.photo[0]);
  };
  //   return <div>Hello</div>;

  return (
    <UserForm
      title={"Edit User"}
      userToEdit={userToEdit}
      onSubmit={handleOnSubmit}
    />
  );
}

export default EditUser;
