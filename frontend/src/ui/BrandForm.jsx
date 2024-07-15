import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";
import { useQuery } from "react-query";
import useGetCategoryAll from "../features/brands-management/useGetAllCategory";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";

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

const StyledLogoInput = styled(StyledInput)`
  grid-template-columns: 1fr 2fr 1fr;
  img {
    grid-column: 3 / -1;
    width: 10rem;
    height: 5rem;
    transform: translateX(-5rem);
  }
`;

const StyledSelectCategory = styled.div`
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

  .select-category {
    grid-column: 2 / span 1;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
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
function BrandForm({ title }) {
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
    reset();
    navigate(-1);
  };
  const createNew = () => {
    // console.log("submitted");
    handleFormSubmit();
  };

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
      </StyledInput>
      <StyledLogoInput>
        <label>Brand Logo</label>
        <input
          type="file"
          name="brandLogo"
          {...register("brandLogo")}
          onChange={handleChange}
          defaultValue={formValues.brandLogo}
        />
        {image && (
          //   <ShowImage>
          <img src={image} />
        )}
      </StyledLogoInput>
      <StyledSelectCategory>
        <label>Select Categories</label>
        <div className="select-category">
          <Select
            isMulti
            name="brandCategories"
            {...register("brandCategories")}
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
        <AddButton buttonText="Save" createNew={createNew} />
        <CancelButton buttonText="Cancel" handleCancel={cancel} />
      </StyledButtons>
    </StyledForm>
  );
}

export default BrandForm;
