import styled from "styled-components";
import ProductDetailsFormInput from "./ProductDetailsFormInput";
import { StyledButtons } from "../AdminFormStyles";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledProductDetails = styled.div`
  margin: 2rem 5rem 0.5rem 5rem;
  border: 1px solid var(--color-grey-300);
  width: 80%;
  height: 70vh;
  overflow-y: auto;
`;

const generateUniqueId = () => "_" + Math.random().toString(36).substring(2, 9);
function ProductDetailsForm({ onSubmit, productDetailsData }) {
  const navigate = useNavigate();
  // const [inputRows, setInputRows] = useState([]);
  // const [inputRows, setInputRows] = useState([
  //   { id: Date.now(), inputName: "", inputValue: "" },
  // ]);
  // console.log(productDetailsData.productDetails?.length);

  const [inputRows, setInputRows] = useState([]);

  useEffect(() => {
    // Check if productDetailsData is defined and has the productDetails array
    if (productDetailsData && productDetailsData.productDetails.length > 0) {
      const transformedData = productDetailsData.productDetails?.map(
        (detail) => ({
          id: generateUniqueId(), // Use the utility function
          inputName: detail?.name || "",
          inputValue: detail?.value || "",
        })
      );

      // console.log("transformedData", transformedData);
      setInputRows(transformedData);
    } else {
      setInputRows([{ id: Date.now(), inputName: "", inputValue: "" }]);
    }
  }, [productDetailsData]);

  // console.log("inputRows", inputRows);

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
  const saveDetails = () => {
    onSubmit(inputRows);
    navigate("/admin/products");
  };
  const onCancel = () => {
    navigate("/admin/products");
  };

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
        <CancelButton buttonText={"Cancel"} handleCancel={onCancel} />
      </StyledButtons>
    </div>
  );
}

export default ProductDetailsForm;
