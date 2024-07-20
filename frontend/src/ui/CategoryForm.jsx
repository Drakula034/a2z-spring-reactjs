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
import { CommonStyledSpan } from "../styles/CommonStyles";

const Container = styled.div`
  /* height: 90%; */
  /* width: 80%; */
`;
// const StyledSpan = styled.span`
//   color: red;
// `;
const StyledImageInput = styled(StyledLogoInput)``;

function CategoryForm({ title, categoryToEdit, onSubmit, formType }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // console.log("categoryToEdit", categoryToEdit);

  const [formValues] = useState({
    categoryName: categoryToEdit?.categoryName || "",
    categoryDescription: categoryToEdit?.description || "",
    enabled: categoryToEdit?.enabled || false,
    photo: categoryToEdit?.photo || "",
  });
  const categoryId = categoryToEdit?.categoryId;

  const handleFormSubmit = (data) => {
    // console.log("logging");
    // console.log(data);
    if (formType == "edit") {
      onSubmit(data, categoryId);
    } else {
      onSubmit(data);
    }
    reset();
    navigate(-1);
  };

  const cancel = () => {
    reset();
    navigate("/admin/categories");
  };
  return (
    // <Container>
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
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
      <StyledInput style={{ marginTop: "1rem" }}>
        <label>Category Name</label>
        <input
          type="text"
          placeholder="Enter Category Name"
          name="categoryName"
          {...register("categoryName", { required: true })}
          defaultValue={formValues.categoryName}
        />
        {errors.categoryName && (
          <CommonStyledSpan>This field is required</CommonStyledSpan>
        )}
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
          {...register("enabled")}
          defaultChecked={formValues.enabled}
        />
      </StyledEnabled>
      <StyledImageInput>
        <label>Image</label>
        <input
          type="file"
          name="photo"
          {...register("photo", { required: formType !== "edit" })}
        />
        {formType !== "edit" && errors.photo && (
          <CommonStyledSpan>This field is required</CommonStyledSpan>
        )}
      </StyledImageInput>
      <StyledButtons>
        <AddButton
          buttonText={"Save"}
          type="submit"
          styled={{ marginRight: "1rem" }}
        />
        <CancelButton buttonText="Cancel" handleCancel={cancel} />
      </StyledButtons>
    </StyledForm>
    // </Container>
  );
}

export default CategoryForm;
