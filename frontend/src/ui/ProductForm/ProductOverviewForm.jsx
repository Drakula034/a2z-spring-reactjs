import { useForm } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import useGetCategoryAll from "../../features/brands-management/useGetAllCategory";
import useGetAllBrandByName from "../../features/products-management/useGetAllBrandByName";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledButtons,
  StyledEnabled,
  StyledForm,
  StyledInput,
  StyledSelectCategory,
} from "../AdminFormStyles";
import { CommonStyledSpan } from "../../styles/CommonStyles";
import useGetProductOverviewData from "../../features/products-management/useGetProductOverviewData";

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
function ProductOverviewForm({ formType, onSubmit, productOverviewData }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Use location.search
  const productId = queryParams.get("productId");

  const [formValues] = useState({
    productName: productOverviewData?.name || "",
    alias: productOverviewData?.productAlias || "",
    productBrands: productOverviewData?.brandName || "",
    productCategories: productOverviewData?.categoryName || "",
    enabled: productOverviewData?.enabled ?? false, // Ensure enabled is always boolean
    inStock: productOverviewData?.inStock ?? false,
    cost: productOverviewData?.cost || "",
    listPrice: productOverviewData?.price || "",
    discount: productOverviewData?.discountPercent || "",
  });

  const { data: categoryList } = useGetCategoryAll();
  const { data: brandsList } = useGetAllBrandByName();
  // console.log(brandsList);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
    } else {
      onSubmit(data, productId);
    }
    reset();
    navigate("/admin/products");
  };

  const Cancel = () => {
    // console.log("Resetting form...");
    reset();
    // console.log("Navigating back...");
    navigate("/admin/products");
  };
  // console.log(brands);

  let brandIndex = null;
  for (let i = 0; i < brands.length; i++) {
    if (brands[i].label === formValues.productBrands) {
      brandIndex = i;
      break;
    }
  }

  let categoryIndex = null;
  for (let i = 0; i < brands.length; i++) {
    if (categories[i].label === formValues.productCategories) {
      categoryIndex = i;
      break;
    }
  }
  // console.log(brandIndex, categoryIndex);
  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <StyledInput style={{ marginTop: "1rem" }}>
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          {...register("productName", { required: true })}
          defaultValue={formValues.productName}
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
          defaultValue={formValues.alias}
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
            defaultValue={brands[brandIndex]}
          />
        </div>
      </StyledInput>
      <StyledSelectCategory>
        <label>Category</label>
        <div className="select-category">
          <Select
            // isMulti
            name="productCategories"
            {...register("productCategories")}
            options={categories}
            onChange={handleCategoryChange}
            // styles={customStyles}
            defaultValue={categories[categoryIndex]}
          />
        </div>
      </StyledSelectCategory>
      <StyledEnabled>
        <label>Enabled</label>
        <input
          type="checkbox"
          name="enabled"
          {...register("enabled")}
          defaultChecked={formValues.enabled}
        />
      </StyledEnabled>
      <StyledEnabled>
        <label>In Stock</label>
        <input
          type="checkbox"
          name="inStock"
          {...register("inStock")}
          defaultChecked={formValues.inStock}
        />
      </StyledEnabled>
      <StyledInput>
        <label>Cost</label>
        <input
          type="number"
          name="cost"
          {...register("cost")}
          defaultValue={formValues.cost}
        />
      </StyledInput>
      <StyledInput>
        <label>List Price</label>
        <input
          type="number"
          name="listPrice"
          {...register("listPrice")}
          defaultValue={formValues.listPrice}
        />
      </StyledInput>
      <StyledInput>
        <label>Discount</label>
        <input
          type="number"
          name="discount"
          {...register("discount")}
          defaultValue={formValues.discount}
        />
      </StyledInput>
      <StyledButtons>
        <AddButton buttonText="Save" type="submit" />
        <CancelButton buttonText="Cancel" handleCancel={Cancel} />
      </StyledButtons>
    </StyledForm>
  );
}

export default ProductOverviewForm;
