import { Controller, useForm } from "react-hook-form";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";
import styled from "styled-components";
import { useQuery } from "react-query";
import useGetAllRoles from "../features/users-management/useGetAllRoles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const StyledForm = styled.form`
  border: 1px solid var(--color-grey-300);
  margin: 2rem 10rem;
  z-index: 2;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  row-gap: 0.5rem;
  font-family: "IBM Plex Sans", sans-serif;
  color: var(--color-grey-700);
`;
const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem;
`;

const StyledName = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  align-items: start;
`;

const StyledInputName = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 0.5rem;

  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    width: 100%;
  }
`;
const StyledInputGroup = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  /* grid-auto-flow: row; */
  column-gap: 1rem;
  row-gap: 0.5rem;
`;

const StyledInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  align-items: center;
  width: 80%; /* Ensure the input takes up the full available width */

  label {
    grid-column: 1 / span 1;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input {
    grid-column: 2 / span 1;
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    width: 70%; /* Adjust width to 100% to fill the container */
  }
`;

const StyledRoles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;

  width: 80%;
  margin-top: 1rem;

  label {
    grid-column: 1 / span 1;
    font-weight: bold;
    margin-bottom: 0.25rem;
    align-items: start;
  }

  div {
    /* grid-column: 2 / span 1; */
    display: grid;
    /* flex-direction: column; */
    grid-auto-flow: row;
    gap: 0.5rem;
    width: 90%;
  }
`;

const StyledRole = styled.div`
  /* display: flex; */
  /* grid-template-columns: max-content max-content 1fr; */
  /* flex-direction: row; */
  display: grid;
  grid-template-columns: max-content max-content auto;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 4px;
  background-color: var(--color-white);
  /* width: 90%; */

  h3,
  h4 {
    margin: 0;
    font-weight: normal;
  }

  h3 {
    font-size: 1rem;
    color: var(--color-grey-900);
  }

  h4 {
    font-size: 0.8rem;
    color: var(--color-grey-700);
  }
`;
const StyledEnabled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  justify-items: start; /* Align items vertically to the center */
  width: 80%;

  label {
    grid-column: 1;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input {
    grid-column: 2; /* Explicitly place input in the second column */
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    width: 10%; /* Adjust width to fill the container */

    &:checked {
      background-color: white;
      accent-color: var(--color-green-400);
    }
  }
`;
const StyledPhoto = styled.div``;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
function UserForm({ title, onSubmit, userToEdit }) {
  const { data: rolesData = [] } = useQuery("getAllRoles", useGetAllRoles());
  const navigate = useNavigate();
  const location = useLocation();
  //   const { roles } = rolesData;
  //   console.log(rolesData);

  const [formValues, setFormValues] = useState({
    firstName: userToEdit ? userToEdit.firstName : "",
    lastName: userToEdit?.lastName || "",
    email: userToEdit?.email || "",
    enabled: userToEdit?.enabled || false,
    photos: userToEdit?.photos || "",
    roles: userToEdit?.roles.map((role) => role.name) || [],
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm();

  // const [password, setPassword] = useState("");

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  const handleFormSubmit = (data) => {
    // console.log(data.photo[0]);
    onSubmit(data);
    reset();
    navigate(-1);
  };

  const handleCancel = () => {
    reset();
    // navigate(-1);
    const previousPath = location.state.from || "/admin/users";
    navigate(previousPath);
    // navigate("/admin/users");
  };
  const password = watch("password", "");
  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <Title>
        {" "}
        <img
          src="/public/assets/a2z-transparent.png"
          alt="logo"
          style={{
            height: "2rem",
            width: "2rem",
            verticalAlign: "middle",
            marginRight: "0.8rem",
            // backgroundColor: "var(--color-green-400)",
          }}
        />
        {title}
      </Title>
      <StyledName>
        <StyledInputName>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName")}
            defaultValue={formValues.firstName}
            size={30}
          />
        </StyledInputName>
        <StyledInputName>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName")}
            size={30}
            defaultValue={formValues.lastName}
          />
        </StyledInputName>
      </StyledName>
      {/* <StyledInputGroup> */}
      <StyledInput>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email")}
          defaultValue={formValues.email}
        />
      </StyledInput>
      {/* </StyledInputGroup> */}
      {/* <StyledInputGroup> */}
      <StyledInput>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password")}
          // onChange={handlePasswordChange}
        />
      </StyledInput>
      {/* </StyledInputGroup> */}
      {/* <StyledInputGroup> */}
      <StyledInput>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          {...register("confirmPassword")}
          disabled={!password}
        />
      </StyledInput>
      {/* </StyledInputGroup> */}
      <StyledRoles>
        <label>Roles</label>
        {/* <label>Roles</label>
        <input type="text" name="roles" {...register("roles")} /> */}
        <div>
          {rolesData.map((role, id) => (
            <StyledRole key={id}>
              {/* <input type="checkbox" {...register} name="roles" />
              <h3 style={{ fontWeight: "normal" }}>{role.roleName}</h3>
              <h4 style={{ fontWeight: "normal" }}>{role.description}</h4> */}
              <Controller
                name={`roles.${role.roleName}`}
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    {...field}
                    defaultChecked={
                      formValues.roles &&
                      formValues.roles.includes(role.roleName)
                    }
                  />
                )}
              />
              <h3 style={{ fontWeight: "normal" }}>{role.roleName}</h3>
              <h4 style={{ fontWeight: "normal" }}>{role.description}</h4>
            </StyledRole>
          ))}
        </div>
      </StyledRoles>
      <StyledEnabled>
        <label>Enabled</label>
        <input
          type="checkbox"
          name="enabled"
          {...register("enabled")}
          defaultChecked={formValues.enabled}
        />
      </StyledEnabled>
      <StyledInput>
        <label>Photos</label>
        <input
          type="file"
          name="photo"
          {...register("photo")}
          defaultValue={formValues.photos}
        />
      </StyledInput>
      <StyledButtons>
        <AddButton
          buttonText={"Save"}
          type="submit"
          styled={{ marginRight: "1rem" }}
        />
        <CancelButton buttonText={"Cancel"} handleCancel={handleCancel} />
      </StyledButtons>
    </StyledForm>
  );
}

export default UserForm;
