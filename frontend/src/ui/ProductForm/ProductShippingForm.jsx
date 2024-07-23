import { useForm } from "react-hook-form";
import { StyledButtons, StyledForm, StyledInput } from "../AdminFormStyles";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledH3 = styled.h3`
  font-weight: normal;
  font-family: "IBM Plex Sans", sans-serif;
`;
function ProductShippingForm({ onSubmit, settingsData }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [formValues] = useState({
    length: settingsData?.length || 0,
    width: settingsData?.width || 0,
    height: settingsData?.height || 0,
    weight: settingsData?.weight || 0,
  });
  const handleFormSubmit = (data) => {
    onSubmit(data);
    // console.log(data);
    navigate("/admin/products");
  };
  const onCancel = () => {
    navigate("/admin/products");
  };
  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <StyledH3>
        {" "}
        The Following information is important to calculate shipping cost for
        the product.
      </StyledH3>
      {/* <br /> */}
      <StyledH3>
        The dimension (L,W,H) is for the box that is used to package the product
        - not the product&apos;s dimensions.
      </StyledH3>
      <StyledInput style={{ marginTop: "1rem" }}>
        <label>Length (inch):</label>
        <input
          type="number"
          name="length"
          {...register("length")}
          defaultValue={formValues.length}
        />
      </StyledInput>
      <StyledInput>
        <label>Width (inch):</label>
        <input
          type="number"
          name="width"
          {...register("width")}
          defaultValue={formValues.width}
        />
      </StyledInput>
      <StyledInput>
        <label>Height (inch):</label>
        <input
          type="number"
          name="height"
          {...register("height")}
          defaultValue={formValues.height}
        />
      </StyledInput>
      <StyledInput>
        <label>Weight (kg):</label>
        <input
          type="number"
          name="weight"
          {...register("weight")}
          defaultValue={formValues.weight}
        />
      </StyledInput>
      <StyledButtons>
        <AddButton buttonText="Save" type="submit" />
        <CancelButton buttonText="Cancel" onCancel={onCancel} />
      </StyledButtons>
    </StyledForm>
  );
}

export default ProductShippingForm;
