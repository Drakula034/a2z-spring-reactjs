import styled from "styled-components";
import useGetAllAddress from "../Address/useGetAllAddress";
import { useSelector } from "react-redux";
import { currentCustomerCustomerId } from "../../../redux/customers/selectors";
import AddressBlock from "./AddressBlock";
import { useState } from "react";

const Container = styled.div`
  margin-top: 1rem;

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    /* font-display: ; */
    /* margin-bottom: 1rem; */
    height: 2.5rem;
    color: #fff;

    border: 1px solid var(--color-grey-400);
    background-color: var(--color-blue-400);
    display: flex; /* Enable flexbox */
    align-items: center;
    padding-left: 2rem;
  }
`;
function SelectDeliveryAddress() {
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const customerId = useSelector(currentCustomerCustomerId);
  const { data: allAddress } = useGetAllAddress(customerId);
  // console.log("allAddress: ", allAddress);
  // console.log("selectedAddressId: ", selectedAddressId);
  return (
    <Container>
      <div className="title">Delivery Address</div>
      {allAddress?.map((address, index) => {
        return (
          <AddressBlock
            key={index}
            address={address}
            setSelectedAddressId={setSelectedAddressId}
          />
        );
      })}
    </Container>
  );
}

export default SelectDeliveryAddress;
