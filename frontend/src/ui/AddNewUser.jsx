import { useForm } from "react-hook-form";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";
import styled from "styled-components";
const StyledForm = styled.form`
  border: 1px solid var(--color-grey-300);
  margin: 3rem 10rem;
  z-index: 2;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  row-gap: 0.5rem;
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
`;
const StyledPhoto = styled.div``;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
function AddNewUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <StyledForm onSubmit={handleSubmit((data) => console.log(data))}>
      <Title>Add New User</Title>
      <StyledName>
        <StyledInputName>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName")}
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
          />
        </StyledInputName>
      </StyledName>
      {/* <StyledInputGroup> */}
      <StyledInput>
        <label>Email</label>
        <input type="email" name="email" {...register("email")} />
      </StyledInput>
      {/* </StyledInputGroup> */}
      {/* <StyledInputGroup> */}
      <StyledInput>
        <label>Password</label>
        <input type="password" name="password" {...register("password")} />
      </StyledInput>
      {/* </StyledInputGroup> */}
      {/* <StyledInputGroup> */}
      <StyledInput>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          {...register("confirmPassword")}
        />
      </StyledInput>
      {/* </StyledInputGroup> */}
      <StyledRoles>
        <label>Roles</label>
        <input type="text" name="roles" {...register("roles")} />
      </StyledRoles>
      <StyledInputGroup>
        <label>Enabled</label>
        <input type="checkbox" name="enabled" {...register("enabled")} />
      </StyledInputGroup>
      <StyledPhoto>
        <label>Photos</label>
        <input type="file" name="photo" {...register("photo")} />
      </StyledPhoto>
      <StyledButtons>
        <AddButton buttonText={"Save"} />
        <CancelButton buttonText={"Cancel"} />
      </StyledButtons>
    </StyledForm>
  );
}

export default AddNewUser;
