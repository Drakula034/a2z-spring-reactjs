import { useLocation } from "react-router-dom";
import UserForm from "../../ui/UserForm";
import useUpdateUser from "./useUpdateUser";

function EditUser() {
  // const location = useLocation();
  const {
    state: { userToEdit },
    location,
  } = useLocation();
  // console.log(userToEdit);
  const { updateUser } = useUpdateUser();
  const handleOnSubmit = (data, userId) => {
    // Extract the file object from the photo input
    const file = data.photo && data.photo[0] ? data.photo[0] : { name: "" };

    // Extract selected roles
    const selectedRoles = Object.keys(data.roles).filter(
      (role) => data.roles[role] === true
    );

    // const userId = 5;
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
      userId: userId,
    };
    updateUser(userData);
    // console.log(userData);
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
