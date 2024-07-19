import { useState } from "react";
import UserForm from "../../ui/UserForm";
import useCreateUser from "./useCreateUser";

function AddUser() {
  const { createUser } = useCreateUser();
  // const [userData, setUserData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     mobileNumber: "",
  //     roles: [],
  //     password: "",
  //     photo: "",
  //     enabled: false,
  //   });
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
  return <UserForm title={"Add New User"} onSubmit={handleOnSubmit} />;
}

export default AddUser;
