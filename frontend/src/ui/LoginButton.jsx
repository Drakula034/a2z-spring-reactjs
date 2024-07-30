import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import styled from "styled-components";
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #007bff; /* Adjust as needed */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
    /* <SignInModal /> */
  }

  span {
    display: flex;
    align-items: center;
    margin-right: 0.5rem; /* Adjust as needed */
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
function LoginButton() {
  return (
    <StyledButton>
      <span>
        <RxAvatar />
      </span>
      Login
    </StyledButton>
  );
}

export default LoginButton;
