import { useForm } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import useGetCategoryAll from "../../features/brands-management/useGetAllCategory";
import useGetAllBrandByName from "../../features/products-management/useGetAllBrandByName";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledButtons,
  StyledEnabled,
  StyledForm,
  StyledInput,
  StyledSelectCategory,
} from "../AdminFormStyles";
import { CommonStyledSpan } from "../../styles/CommonStyles";

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
function ProductOverviewForm({ formType, onSubmit }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const { data: categoryList } = useGetCategoryAll();
  const { data: brandsList } = useGetAllBrandByName();
  // console.log(brandsList);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

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
    if (brandsList) {
      const brandData = brandsList.map((brand) => ({
        value: brand.brandId,
        label: brand.brandName,
      }));

      setBrands(brandData);
    }
  }, [brandsList]);

  useEffect(() => {
    setValue("productBrands", selectedBrands);
    setValue("productCategories", selectedCategory);
  }, [selectedBrands, selectedCategory, setValue]);

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategory(selectedOptions);
  };

  const handleBrandChange = (selectedOptions) => {
    setSelectedBrands(selectedOptions);
  };
  const handleFormSubmit = (data) => {
    // console.log(data);
    if (formType === "add") {
      onSubmit(data);
    }
    // reset();
    // navigate(-1);
  };

  const onCancel = () => {
    // reset();
    // navigate(-1);
  };
  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <StyledInput style={{ marginTop: "1rem" }}>
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          {...register("productName", { required: true })}
        />
        {errors.productName && (
          <CommonStyledSpan>Product Name is required</CommonStyledSpan>
        )}
      </StyledInput>
      <StyledInput>
        <label>Alias</label>
        <input
          type="text"
          name="productAlias"
          {...register("productAlias")}
          placeholder="Default is product name (space is replaced by dashes)"
        />
      </StyledInput>
      <StyledInput>
        <label>Brand</label>
        {/* <input type="text" name="brand" {...register("brand")} /> */}
        <div className="select-category">
          <Select
            // isMulti
            name="productBrands"
            {...register("productBrands")}
            options={brands}
            onChange={handleBrandChange}
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
            // isMulti
            name="productCategories"
            {...register("productCategories")}
            options={categories}
            onChange={handleCategoryChange}
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
        <CancelButton buttonText="Cancel" handleCancel={onCancel} />
      </StyledButtons>
    </StyledForm>
  );
}

export default ProductOverviewForm;
