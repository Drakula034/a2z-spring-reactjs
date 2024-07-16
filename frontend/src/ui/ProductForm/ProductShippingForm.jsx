import { useForm } from "react-hook-form";
import { StyledButtons, StyledForm, StyledInput } from "../AdminFormStyles";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import styled from "styled-components";

const StyledH3 = styled.h3`
  font-weight: normal;
  font-family: "IBM Plex Sans", sans-serif;
`;
function ProductShippingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    // console.log(data);
  };
  const createNew = () => {};
  const onCancel = () => {};
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
        <input type="number" name="length" {...register("length")} />
      </StyledInput>
      <StyledInput>
        <label>Width (inch):</label>
        <input type="number" name="width" {...register("width")} />
      </StyledInput>
      <StyledInput>
        <label>Height (inch):</label>
        <input type="number" name="height" {...register("height")} />
      </StyledInput>
      <StyledInput>
        <label>Weight (kg):</label>
        <input type="number" name="weight" {...register("weight")} />
      </StyledInput>
      <StyledButtons>
        <AddButton buttonText="Save" createNew={createNew} />
        <CancelButton buttonText="Cancel" onCancel={onCancel} />
      </StyledButtons>
    </StyledForm>
  );
}

export default ProductShippingForm;
