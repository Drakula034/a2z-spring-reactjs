import { Controller, useForm } from "react-hook-form";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";
import styled from "styled-components";
import { useQuery } from "react-query";
import useGetAllRoles from "../features/users-management/useGetAllRoles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  StyledButtons,
  StyledEnabled,
  StyledForm,
  StyledInput,
  StyledLogoInput,
  StyledRole,
  StyledRoles,
  StyledUserInputName,
  StyledUserName,
  Title,
} from "./AdminFormStyles";

const StyledInputGroup = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  /* grid-auto-flow: row; */
  column-gap: 1rem;
  row-gap: 0.5rem;
`;

const StyledImageInput = styled(StyledLogoInput)``;

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
      <StyledUserName>
        <StyledUserInputName>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName")}
            defaultValue={formValues.firstName}
            size={30}
          />
        </StyledUserInputName>
        <StyledUserInputName>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName")}
            size={30}
            defaultValue={formValues.lastName}
          />
        </StyledUserInputName>
      </StyledUserName>
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
      <StyledImageInput>
        <label>Photos</label>
        <input
          type="file"
          name="photo"
          {...register("photo")}
          defaultValue={formValues.photos}
        />
      </StyledImageInput>
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
