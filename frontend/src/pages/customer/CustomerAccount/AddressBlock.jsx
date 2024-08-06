import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const AddressContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* background-color: var(--color-blue-100); */
  background-color: #f5faff;
  /* margin: 1rem; */
  padding: 15px 5px 5px 10px;
  .name,
  .code-mobile,
  .address-line1,
  .address-line2,
  .city-state,
  .country {
    background-color: white;
    display: flex;
    gap: 1rem;
    position: relative; /* Ensure the label is positioned relative to the input */

    input {
      height: 3rem;
      width: 50%;
      font-size: 1rem;
      padding: 1rem 0.5rem; /* Adjust padding to prevent text from overlapping */
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      background: transparent;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #007bff; /* Change border color on focus */
      }

      &::placeholder {
        color: #999;
        font-size: 1rem;
        transition: all 0.3s ease; /* Smooth transition for placeholder movement */
      }

      &:focus::placeholder {
        /* &:not(:placeholder-shown)::placeholder { */
        opacity: 0.8; //Hide placeholder when input is focused or has content
        transform: translateY(-1rem); /* Move placeholder text upwards */
        font-size: 0.75rem; /* Optional: Reduce font size */
      }
      /* &:focus::-moz-placeholder {
      } */
    }
  }
  .address-line1,
  .address-line2,
  .country {
    input {
      width: 100%;
    }
  }

  .default-address {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Space between the checkbox and label */
    margin-top: 1rem; /* Space above the checkbox */
  }

  .default-address input[type="checkbox"] {
    accent-color: #007bff; /* Change checkbox color (for modern browsers) */
    cursor: pointer; /* Change cursor to pointer on hover */
    margin-right: 0.5rem; /* Space between checkbox and label text */
  }

  .default-address label {
    font-size: 1rem; /* Font size for the label */
    color: #333; /* Text color for the label */
    cursor: pointer; /* Change cursor to pointer on hover */
    transition: color 0.3s ease; /* Smooth transition for text color */
  }

  .default-address label:hover {
    color: #007bff; /* Change color on hover */
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .save,
    .cancel {
      background-color: var(--color-blue-400);
      border-radius: 4px;
      padding: 4px;
      color: white;
      border: none;
      height: 3rem;
      width: 10rem;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: var(--color-blue-600);
        border: 1px solid var(--color-blue-600);
        font-weight: bolder;
      }
    }

    .cancel {
      background-color: var(--color-grey-400);
      &:hover {
        color: var(--color-grey-600);
        border: 1px solid var(--color-grey-600);
      }
    }
  }
`;

function AddressBlock({
  handleCancelClick,
  addressBlockTitle,
  handleAddressSubmit,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    pinCode: "",
    mobileNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    isDefault: false,
  });
  const onSubmit = (data) => {
    handleAddressSubmit(data);
  };

  return (
    <AddressContainer onSubmit={handleSubmit(onSubmit)}>
      <h3>{addressBlockTitle}</h3>
      <div className="name">
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          {...register("firstName")}
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          {...register("lastName")}
        />
      </div>
      <div className="code-mobile">
        <input
          type="number"
          placeholder="Pin Code"
          id="pinCode"
          {...register("postalCode")}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          id="mobileNumber"
          {...register("mobileNumber")}
        />
      </div>
      <div className="address-line1">
        <input
          type="text"
          placeholder="Flat, House no., Building, Company, Appartment"
          id="addressLine1"
          {...register("addressLine1")}
        />
      </div>
      <div className="address-line2">
        <input
          type="text"
          placeholder="Area, Street, Sector, Village"
          id="addressLine2"
          {...register("addressLine2")}
        />
      </div>
      <div className="city-state">
        <input
          type="text"
          placeholder="Town/City"
          id="city"
          {...register("city")}
        />
        <input
          type="text"
          placeholder="state"
          id="state"
          {...register("state")}
        />
      </div>
      <div className="country">
        <input
          type="text"
          placeholder="Country"
          id="country"
          {...register("country")}
        />
      </div>
      <div className="default-address">
        <input
          type="checkbox"
          id="defaultAddress"
          {...register("defaultAddress")}
        />
        <label htmlFor="defaultAddress">Make this my default address</label>
      </div>
      <div className="button">
        <button className="save" type="submit">
          Save Address
        </button>
        <button className="cancel" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </AddressContainer>
  );
}

export default AddressBlock;
