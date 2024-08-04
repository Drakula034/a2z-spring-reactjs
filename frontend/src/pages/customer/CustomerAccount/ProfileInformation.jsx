import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 20px;

  h2 {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  .name,
  .email,
  .mobileNumber {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    input {
      flex: 1;
      height: 3rem;
      width: 50%;
      font-size: 1rem;
      color: var(--color-grey-500);
      padding: 4px;
    }

    .input-group {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      width: 80%;

      input {
        flex: 1;
        height: 3rem;
        font-size: 1rem;
        padding: 4px;
        color: var(--color-grey-500);
      }
    }

    label {
      font-weight: bold;
    }
  }
  .button {
    display: flex;
    justify-content: space-around;
  }
  .deactivate-account,
  .edit-account,
  .delete-account {
    color: var(--color-blue-400);
    cursor: pointer;
    border: 1px solid var(--color-grey-500);
    border-radius: 4px;
    padding: 4px;

    &:hover {
      background-color: var(--color-blue-400);
      color: white;
      border: none;
    }
  }
  .delete-account {
    color: var(--color-red-400);
    &:hover {
      background-color: var(--color-red-400);
      color: white;
    }
  }
`;

function ProfileInformation({ customerPersonalInfo }) {
  const [formData, setFormData] = useState({
    firstName: customerPersonalInfo?.firstName || "",
    lastName: customerPersonalInfo?.lastName || "",
    email: customerPersonalInfo?.email || "",
    mobileNumber: customerPersonalInfo?.mobileNumber || "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };
  return (
    <Container>
      <h2>Profile Information</h2>
      <Wrapper>
        <div className="name">
          <label htmlFor="firstName">Name</label>
          <div className="input-group">
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          {/* <div className="input-group"> */}
          <input
            type="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          {/* </div> */}
        </div>
        <div className="mobileNumber">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          {/* <div className="input-group"> */}
          <input
            type="text"
            id="mobileNumber"
            value={formData.mobileNumber}
            placeholder="Not Available"
            onChange={handleChange}
          />
          {/* </div> */}
        </div>
        <div className="button">
          <h3 className="edit-account" onClick={() => console.log(formData)}>
            Edit Account
          </h3>
          <h3 className="deactivate-account">Deactivate Account</h3>
          <h3 className="delete-account">Delete Account</h3>
        </div>
      </Wrapper>
    </Container>
  );
}

export default ProfileInformation;
