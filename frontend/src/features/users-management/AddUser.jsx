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
    const file = data.photo[0].name;

    // Extract selected roles
    const selectedRoles = Object.keys(data.roles).filter(
      (role) => data.roles[role] === true
    );

    // Set user data
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobileNumber: data.mobileNumber,
      roles: selectedRoles,
      password: data.password,
      photo: file,
      enabled: data.enabled,
    };
    createUser(userData);
  };
  return <UserForm title={"Add New User"} onSubmit={handleOnSubmit} />;
}

export default AddUser;
