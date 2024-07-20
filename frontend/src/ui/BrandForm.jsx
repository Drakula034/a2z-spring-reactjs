import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";
import { useQuery } from "react-query";
import useGetCategoryAll from "../features/brands-management/useGetAllCategory";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledButtons,
  StyledForm,
  StyledInput,
  StyledLogoInput,
  StyledSelectCategory,
  Title,
} from "./AdminFormStyles";
import { CommonStyledSpan } from "../styles/CommonStyles";

const Container = styled.div`
  /* height: 90%; */
  /* width: 80%; */
`;

const customStyles = {
  multiValue: (base) => ({
    ...base,
    backgroundColor: "lightblue",
    display: "inline-block", // Display selected values inline
    marginRight: "4px", // Add space between selected values
    marginBottom: "4px", // Add space below selected values
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "blue",
  }),
  multiValueRemove: (base) => ({
    ...base,
    display: "none", // Hide the remove button
  }),
};
function BrandForm({ title, onSubmit, formType }) {
  const navigate = useNavigate();
  const location = useLocation();
  const brandToEdit = location.state?.brandToEdit;
  //   console.log(brandToEdit);
  const [image, setImage] = useState(null);
  const [selectCategories, setSelectCategories] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const [formValues] = useState({
    brandName: brandToEdit?.brandName || "",

    brandLogo: brandToEdit?.brandLogo || null,
    brandCategories: brandToEdit?.categories || [],
  });

  //   console.log(formValues);

  const { data: categoryList } = useGetCategoryAll();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categoryList) {
      const categoryOptions = categoryList.map((category) => ({
        value: category.categoryId,
        label: category.categoryName,
      }));
      //   console.log(categoryOptions); // Log to verify the data
      setCategories(categoryOptions);
    }
  }, [categoryList]);
  useEffect(() => {
    // Update form value when selectedCategories change
    setValue("brandCategories", selectCategories);
  }, [selectCategories, setValue]);

  const handleChange = (event) => {
    const file = event.target.files[0];
    // console.log(file.name);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      //   console.log(imageUrl); // Log the image URL for debugging
    }
  };
  //   console.log(image);

  const cancel = () => {
    // console.log("cancel");
    reset();
    navigate(-1);
  };

  const handleCategoryChange = (selectedCategory) => {
    setSelectCategories(selectedCategory);
  };

  const handleFormSubmit = (data) => {
    // console.log(data);

    onSubmit(data);
    // reset();
    // navigate(-1);
  };
  // const createNew = () => {
  //   // console.log("submitted");
  //   handleFormSubmit();
  // };

  return (
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
      <StyledInput>
        <label>Brand Name</label>
        <input
          type="text"
          name="brandName"
          {...register("brandName", { required: true })}
          defaultValue={formValues.brandName}
        />
        {errors.brandName && (
          <CommonStyledSpan>This field is required</CommonStyledSpan>
        )}
      </StyledInput>
      <StyledLogoInput>
        <label>Brand Logo</label>
        <input
          type="file"
          name="brandLogo"
          {...register("brandLogo", { required: formType === "add" })}
          onChange={handleChange}
          defaultValue={formValues.brandLogo}
        />
        {image && (
          //   <ShowImage>
          <img src={image} />
        )}
        {formType === "add" && errors.brandLogo && (
          <CommonStyledSpan>This field is required</CommonStyledSpan>
        )}
      </StyledLogoInput>
      <StyledSelectCategory>
        <label>Select Categories</label>
        <div className="select-category">
          <Select
            isMulti
            name="brandCategories"
            {...register("brandCategories", { required: formType === "add" })}
            options={categories}
            onChange={handleCategoryChange}
            styles={customStyles}
            // value={selectCategories}
            defaultValue={formValues.brandCategories.map((category) => ({
              value: category.categoryId,
              label: category.categoryName,
            }))}
          />
        </div>
      </StyledSelectCategory>
      {/* {selectCategories && (
        <div>
          {selectCategories.map((category, index) => (
            <p key={index}>{category.label}</p>
          ))}
        </div>
      )} */}

      <StyledButtons>
        <AddButton buttonText="Save" />
        <CancelButton buttonText="Cancel" handleCancel={cancel} />
      </StyledButtons>
    </StyledForm>
  );
}

export default BrandForm;
