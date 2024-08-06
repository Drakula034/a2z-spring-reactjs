import styled from "styled-components";
import AddressBlock from "./AddressBlock";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import useAddAddress from "../Address/useAddAddress";
import useGetAllAddress from "../Address/useGetAllAddress";
import AddressUnit from "./AddressUnit";
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
function AddressInformation({ customerId }) {
  const { addAddress } = useAddAddress();
  console.log("customerId: ", customerId);
  const { data: addressLists } = useGetAllAddress(customerId);
  console.log("address data: ", addressLists);
  const [showAddressBlock, setShowAddressBlock] = useState(false);

  const handleAddressSectionClick = () => {
    setShowAddressBlock(!showAddressBlock);
  };
  const handleCancelClick = () => {
    setShowAddressBlock(false);
  };
  const handleAddressSubmit = (data) => {
    console.log("address data: ", data);
    // addAddress(data);
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
          handleAddressSubmit={handleAddressSubmit}
        />
      )}

      {addressLists?.length > 0 &&
        addressLists?.map((address, index) => {
          return <AddressUnit key={index} address={address} />;
        })}
    </Container>
  );
}

export default AddressInformation;
