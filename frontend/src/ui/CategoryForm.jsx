import { useForm } from "react-hook-form";
import styled from "styled-components";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  /* height: 90%; */
  /* width: 80%; */
`;
const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem;
`;
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
`;

const StyledInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 1rem;
  align-items: center;
  width: 80%; /* Ensure the input takes up the full available width */
  margin-bottom: 1rem;

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
    width: 80%; /* Adjust width to 100% to fill the container */
  }
`;

const StyledInputDescription = styled(StyledInput)`
  textarea {
    height: 10rem;
    grid-column: 2 / span 1;
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    width: 80%;
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

    /* justify-self: start; */
    /* align-self: start; */
    /* accent-color: var(--color-green-400); */

    &:checked {
      background-color: white;
      accent-color: var(--color-green-400);
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

function CategoryForm({ title, categoryToEdit }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [formValues] = useState({
    categoryName: categoryToEdit?.categoryName || "",
    categoryDescription: categoryToEdit?.description || "",
    enabled: categoryToEdit?.enabled || false,
    photo: categoryToEdit?.photo || "",
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  const createNew = () => {
    handleFormSubmit();
    navigate(-1);
  };
  const cancel = () => {
    reset();
    navigate("/admin/categories");
  };
  return (
    <Container>
      <Title>
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
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <StyledInput style={{ marginTop: "1rem" }}>
          <label>Category Name</label>
          <input
            type="text"
            placeholder="Enter Category Name"
            name="categoryName"
            {...register("categoryName", { required: true })}
            defaultValue={formValues.categoryName}
          />
        </StyledInput>
        <StyledInputDescription>
          <label>Category Description</label>
          <textarea
            name="categoryDescription"
            {...register("categoryDescription")}
            maxLength={4000}
            defaultValue={formValues.categoryDescription}
            // minLength={5}
          />
        </StyledInputDescription>
        <StyledEnabled>
          <label>Enabled</label>
          <input
            type="checkbox"
            name="enabled"
            {...register("enabled", { required: true })}
            defaultChecked={formValues.enabled}
          />
        </StyledEnabled>
        <StyledInput>
          <label htmlFor="photo">Image</label>
          <input type="file" name="photo" {...register("photo")} />
        </StyledInput>
        <StyledButtons>
          <AddButton buttonText="Save" createNew={createNew} />
          <CancelButton buttonText="Cancel" handleCancel={cancel} />
        </StyledButtons>
      </StyledForm>
    </Container>
  );
}

export default CategoryForm;
