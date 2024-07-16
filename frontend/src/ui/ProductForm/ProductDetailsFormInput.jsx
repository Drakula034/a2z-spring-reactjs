import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { useForm } from "react-hook-form";
// const StyledInput = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   column-gap: 1rem;
//   align-items: center;
// `;
// const StyledLabel = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const StyledInputValue = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const StyledInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  margin: 1rem 1rem;
`;

const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-right: 1rem;
`;

const StyledInputValue = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const LabelText = styled.label`
  margin-right: 0.5rem;
  white-space: nowrap;
  margin-right: 1rem;
`;

const InputField = styled.input`
  flex-grow: 1;
  width: 100%;
  size: 10;
`;
function ProductDetailsFormInput({ row, onChange, onRemove }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { inputName, inputValue } = row;

  const handleFormInputSubmit = (data) => {
    console.log(data);
  };
  return (
    <StyledInput>
      <StyledLabel>
        <LabelText>Name: </LabelText>
        <InputField
          type="text"
          name="inputName"
          value={inputName}
          {...register("inputName", { required: true })}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </StyledLabel>
      <StyledInputValue>
        <LabelText>Value: </LabelText>
        <InputField
          type="text"
          name="inputValue"
          {...register("inputValue", { required: true })}
          onChange={(e) => {
            onChange(e);
          }}
          value={inputValue}
        />
        <MdCancel
          size={"1.5rem"}
          style={{ marginLeft: "0.5rem" }}
          onClick={onRemove}
        />
      </StyledInputValue>
    </StyledInput>
  );
}

export default ProductDetailsFormInput;
