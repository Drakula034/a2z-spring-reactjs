import styled from "styled-components";
import AddressBlock from "./AddressBlock";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
const Container = styled.div`
  background-color: white;
  padding: 20px;

  h2 {
    text-align: center;
  }
`;
const AddressWrapper = styled.div``;

const AddressSection = styled.div`
  border: 1px solid var(--color-grey-500);
  padding: 10px;
  height: 3rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  .icon,
  .text {
    color: var(--color-blue-500);
  }
`;
function AddressInformation() {
  const [showAddressBlock, setShowAddressBlock] = useState(false);

  const handleAddressSectionClick = () => {
    setShowAddressBlock(!showAddressBlock);
  };
  const handleCancelClick = () => {
    setShowAddressBlock(false);
  };

  return (
    <Container>
      <h2>Address Information</h2>
      {showAddressBlock == false && (
        <AddressSection onClick={handleAddressSectionClick}>
          <div className="icon">
            <FaPlus />
          </div>
          <div className="text">Add New Address</div>
        </AddressSection>
      )}
      {showAddressBlock && (
        <AddressBlock
          handleCancelClick={handleCancelClick}
          addressBlockTitle="Add New Address"
        />
      )}
    </Container>
  );
}

export default AddressInformation;
