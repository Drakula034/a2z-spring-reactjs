import { Controller, useForm } from "react-hook-form";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";
import styled from "styled-components";
import { useQuery } from "react-query";
import useGetAllRoles from "../features/users-management/useGetAllRoles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
const StyledSpan = styled.span`
  color: red;
`;

const StyledImageInput = styled(StyledLogoInput)``;

function UserForm({ title, onSubmit, userToEdit, formType }) {
  const { data: rolesData = [] } = useQuery("getAllRoles", useGetAllRoles());
  const navigate = useNavigate();
  const location = useLocation();
  //   const { roles } = rolesData;
  //   console.log(rolesData);
  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   // const queryParams = new URLSearchParams(location.search);
  //   // const id = queryParams.get("userId");
  //   // setUserId(id);
  //   setUserId(userToEdit?.userId);
  // }, [location]);

  const userId = userToEdit?.userId;
  // console.log(userId);
  // console.log(userToEdit);
  const [formValues, setFormValues] = useState({
    firstName: userToEdit ? userToEdit.firstName : "",
    lastName: userToEdit?.lastName || "",
    email: userToEdit?.email || "",
    mobileNumber: userToEdit?.mobileNumber || "",
    enabled: userToEdit?.enabled || false,
    photos: userToEdit?.photos || "",
    roles: userToEdit?.roles.map((role) => role.name) || [],
    password: userToEdit?.password || "",
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    // console.log(data.photo[0]);
    // console.log(data);
    if (formType === "edit") {
      onSubmit(data, userId);
    } else {
      onSubmit(data, userId);
    }

    // reset();
    // navigate(-1);
  };

  const handleCancel = () => {
    reset();
    // navigate(-1);
    const previousPath = location.state.from || "/admin/users";
    navigate(previousPath);
    // navigate("/admin/users");
  };
  const password = watch("password", "");
  const validateFileSize = (file) => {
    if (file && (file.size < 20 * 1024 || file.size > 2 * 1024 * 1024)) {
      return "File size must be between 20KB and 2MB.";
    }
    return true;
  };
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
            {...register("firstName", { required: true })}
            defaultValue={formValues.firstName}
            size={30}
          />
          {errors.firstName && <StyledSpan>First Name is required</StyledSpan>}
        </StyledUserInputName>
        <StyledUserInputName>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName", { required: true })}
            size={30}
            defaultValue={formValues.lastName}
          />
          {errors.lastName && <StyledSpan>Last Name is required</StyledSpan>}
        </StyledUserInputName>
      </StyledUserName>
      <StyledInput>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Provide a valid email address",
            },
          })}
          defaultValue={formValues.email}
        />
        {errors.email && <StyledSpan>{errors.email.message}</StyledSpan>}
      </StyledInput>
      <StyledInput>
        <label>Mobile Number</label>
        <input
          type="Number"
          name="mobileNumber"
          {...register("mobileNumber", { required: true })}
          defaultValue={formValues.mobileNumber}
        />
        {errors.mobileNumber && (
          <StyledSpan>Mobile Number is required</StyledSpan>
        )}
      </StyledInput>
      <StyledInput>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: formType === "add",
          })}
          defaultValue={formValues.password}

          // onChange={handlePasswordChange}
        />
        {errors.password && <StyledSpan>Password is required</StyledSpan>}
      </StyledInput>
      <StyledInput>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          {...register("confirmPassword", {
            validate: (value) => {
              // If password is empty, don't validate confirmPassword
              if (!password) return true;
              return value === password || "Passwords do not match";
            },
          })}
          disabled={!password}
        />
        {errors.confirmPassword && (
          <StyledSpan>{errors.confirmPassword.message}</StyledSpan>
        )}
      </StyledInput>

      <StyledRoles>
        <label>Roles</label>
        <div>
          {rolesData.map((role, id) => (
            <StyledRole key={id}>
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
              {errors.roles && <StyledSpan>Role is required</StyledSpan>}
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
          {...register("photo", {
            validate: (value) => validateFileSize(value),
          })}
          // value={formValues.photos}
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
