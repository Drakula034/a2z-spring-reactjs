import { useLocation } from "react-router-dom";
import UserForm from "../../ui/UserForm";
import useCreateUser from "./useCreateUser";

function EditUser() {
  const location = useLocation();
  const {
    state: { userToEdit },
  } = useLocation();
  // console.log(userToEdit);
  const { createUser } = useCreateUser();
  const handleOnSubmit = (data) => {
    // Extract the file object from the photo input
    const file = data.photo[0];

    // Extract selected roles
    const selectedRoles = Object.keys(data.roles).filter(
      (role) => data.roles[role] === true
    );

    // Set user data
    const userData = {
      firstName:
        data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1),
      lastName: data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1),
      email: data.email,
      mobileNumber: data.mobileNumber,
      roles: selectedRoles,
      password: data.password,
      photos: file.name,
      enabled: data.enabled,
    };
    createUser(userData);
  };

  return (
    <UserForm
      title={"Edit User"}
      userToEdit={userToEdit}
      onSubmit={handleOnSubmit}
      formType={"edit"}
    />
  );
}

export default EditUser;
