import { useForm } from "react-hook-form";
import styled from "styled-components";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledForm,
  StyledInput,
  Title,
  StyledInputDescription,
  StyledEnabled,
  StyledButtons,
  StyledLogoInput,
} from "./AdminFormStyles";

const Container = styled.div`
  /* height: 90%; */
  /* width: 80%; */
`;

const StyledImageInput = styled(StyledLogoInput)``;

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
        <StyledImageInput>
          <label htmlFor="photo">Image</label>
          <input type="file" name="photo" {...register("photo")} />
        </StyledImageInput>
        <StyledButtons>
          <AddButton buttonText="Save" createNew={createNew} />
          <CancelButton buttonText="Cancel" handleCancel={cancel} />
        </StyledButtons>
      </StyledForm>
    </Container>
  );
}

export default CategoryForm;
