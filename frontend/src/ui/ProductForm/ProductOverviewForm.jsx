import { useForm } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import useGetCategoryAll from "../../features/brands-management/useGetAllCategory";
import { useEffect, useState } from "react";

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
    /* width: max-content; */
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
function ProductOverviewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  return (
    <StyledForm>
      <StyledInput>
        <label>Product Name</label>
        <input type="text" name="productName" {...register("productName")} />
      </StyledInput>
      <StyledInput>
        <label>Brand</label>
        {/* <input type="text" name="brand" {...register("brand")} /> */}
        <div className="select-category">
          <Select
            isMulti
            name="productCategories"
            {...register("productCategories")}
            options={categories}
            // onChange={handleCategoryChange}
            styles={customStyles}
            // value={selectCategories}
            // defaultValue={formValues.brandCategories.map((category) => ({
            //   value: category.categoryId,
            //   label: category.categoryName,
            // }))}
          />
        </div>
      </StyledInput>
      <StyledSelectCategory>
        <label>Category</label>
        {/* <input type="text" name="category" {...register("category")} /> */}
        <div className="select-category">
          <Select
            isMulti
            name="productCategories"
            {...register("productCategories")}
            options={categories}
            // onChange={handleCategoryChange}
            styles={customStyles}
            // value={selectCategories}
            // defaultValue={formValues.brandCategories.map((category) => ({
            //   value: category.categoryId,
            //   label: category.categoryName,
            // }))}
          />
        </div>
      </StyledSelectCategory>
      <StyledEnabled>
        <label>Enabled</label>
        <input type="checkbox" name="enabled" {...register("enabled")} />
      </StyledEnabled>
      <StyledEnabled>
        <label>In Stock</label>
        <input type="checkbox" name="inStock" {...register("inStock")} />
      </StyledEnabled>
      <StyledInput>
        <label>Cost</label>
        <input type="number" name="cost" {...register("cost")} />
      </StyledInput>
      <StyledInput>
        <label>List Price</label>
        <input type="number" name="listPrice" {...register("listPrice")} />
      </StyledInput>
      <StyledInput>
        <label>Discount</label>
        <input type="number" name="discount" {...register("discount")} />
      </StyledInput>
      <StyledButtons>
        <AddButton buttonText="Save" />
        <CancelButton buttonText="Cancel" />
      </StyledButtons>
    </StyledForm>
  );
}

export default ProductOverviewForm;
