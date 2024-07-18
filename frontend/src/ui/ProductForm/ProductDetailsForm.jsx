import styled from "styled-components";
import ProductDetailsFormInput from "./ProductDetailsFormInput";
import { StyledButtons } from "../AdminFormStyles";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import { useState } from "react";

const StyledProductDetails = styled.div`
  margin: 2rem 5rem 0.5rem 5rem;
  border: 1px solid var(--color-grey-300);
  width: 80%;
  height: 70vh;
`;
function ProductDetailsForm() {
  const [inputRows, setInputRows] = useState([
    { id: Date.now(), inputName: "", inputValue: "" },
  ]);

  const handleAddRow = () => {
    const lastInputRows = inputRows[inputRows.length - 1];
    if (lastInputRows.inputName && lastInputRows.inputValue) {
      setInputRows([
        ...inputRows,
        { id: Date.now(), inputName: "", inputValue: "" },
      ]);
    } else {
      alert("Please fill all the previous field");
    }
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setInputRows((prevRows) =>
      prevRows.map((row) =>
        row.id === index ? { ...row, [name]: value } : row
      )
    );
  };
  const handleRowDeletion = (index) => {
    setInputRows((prevRows) => prevRows.filter((row) => row.id !== index));
  };

  const resetFirstAndLastRow = () => {
    setInputRows([{ id: Date.now(), inputName: "", inputValue: "" }]);
  };
  const saveDetails = () => {};

  return (
    <div>
      <StyledProductDetails>
        {inputRows.map((row, index) => (
          <div key={index}>
            <ProductDetailsFormInput
              row={row}
              onChange={(e) => handleInputChange(e, row.id)}
              onRemove={
                inputRows.length > 1
                  ? () => handleRowDeletion(row.id)
                  : resetFirstAndLastRow
              }
            />
          </div>
        ))}
      </StyledProductDetails>
      <StyledButtons>
        <AddButton buttonText={"Add More Details"} createNew={handleAddRow} />
        <AddButton buttonText={"Save"} createNew={saveDetails} />
        <CancelButton buttonText={"Cancel"} />
      </StyledButtons>
    </div>
  );
}

export default ProductDetailsForm;
