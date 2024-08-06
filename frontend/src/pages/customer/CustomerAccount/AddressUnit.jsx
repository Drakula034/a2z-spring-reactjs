import styled from "styled-components";
import EditDeleteButton from "./EditDeleteButton";
import { HiDotsVertical } from "react-icons/hi";
const AddressContainer = styled.div`
  border: 1px solid var(--color-grey-500);
  padding: 0.5rem;
  width: 100%;
  height: auto;
  font-family: Inter, -apple-system, Helvetica, Arial, sans-serif;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .name {
    display: flex;
    gap: 3rem;
    padding: 0 1rem;
    /* justify-content: space-between; */

    span {
      font-size: 14px;
      /* color: var(--color-grey-500); */
      /* color: #212121; */
      font-weight: 500;
      line-height: 1.4;
      /* font-family: "Times New Roman", Times, serif; */
      /* font-family: Inter, -apple-system, Helvetica, Arial, sans-serif; */
    }
    .button {
      position: relative;

      &:hover .edit-delete-buttons {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: -1rem; /* Adjust the vertical position as needed */
      }
      .dots {
        cursor: pointer;
      }
    }
  }

  .addressLine1 {
    gap: 3rem;
    padding: 0 1rem;
    span {
      font-size: 14px;
      font-weight: 400;
      color: #212121;
    }
  }

  .city {
    display: flex;
    gap: 0.5rem;
    padding: 0 1rem;
    span {
      font-size: 14px;
      font-weight: 400;
      color: #212121;
    }
  }
`;
function AddressUnit({ address }) {
  const {
    addressId,
    addressLine1,
    addressLine2,
    city,
    state,
    firstName,
    lastName,
    phoneNumber,
    postalCode,
    countryId,
    defaultAddress,
  } = address;
  return (
    <AddressContainer>
      <div className="name">
        <span>
          {firstName} {lastName}
        </span>
        <span>{phoneNumber}</span>
        <span>{countryId}</span>
        <span>{defaultAddress ? "Default" : ""}</span>
        <div className="button">
          <EditDeleteButton />
          <HiDotsVertical className="dots" />
        </div>
      </div>
      {addressLine1?.length > 0 && (
        <div className="addressLine1">
          {" "}
          <span>{addressLine1}</span>
        </div>
      )}
      {addressLine2?.length > 0 && (
        <div className="addressLine1">
          <span>{addressLine2}</span>
        </div>
      )}
      <div className="city">
        <span>{city} ,</span>
        <span>{state}</span>

        <span> - {postalCode}</span>
      </div>
    </AddressContainer>
  );
}

export default AddressUnit;
