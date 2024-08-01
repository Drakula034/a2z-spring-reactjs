import styled from "styled-components";
import LoginButton from "../LoginButton";
import CartButton from "../CartButton";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignInModal from "../SignInModal"; // Import the SigninModal component
import { useSelector } from "react-redux";
import { selectCurrentCustomer } from "../../redux/customers/selectors";
import CustomerProfileModal from "../CustomerProfileModal";

const StyledContainer = styled.div`
  position: ${({ headerPosition }) => headerPosition || "fixed"};
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const StyledHeader = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2rem;
  margin-left: 4rem;

  img {
    height: 3rem;
    width: 5rem;
    cursor: pointer;
    &:hover {
      /* background-color: #0056b3; Adjust as needed */
      border: 1px solid blue;
    }
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    height: 2.5rem;
    width: 40rem;
    padding: 0.5rem 2rem 0.5rem 3rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background-color: var(--color-grey-100);
    font-size: medium;
  }

  svg {
    position: absolute;
    left: 0.75rem;
    color: var(--color-grey-400);
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const LoginButtonContainer = styled.div`
  position: relative;

  &:hover .dropdown {
    display: block;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%; // Position the dropdown below the LoginButton
  left: 0;
  display: none;
  z-index: 1000; // Ensure the dropdown appears above other content
`;

function MainHeader({ headerPosition }) {
  const navigate = useNavigate();
  const currentCustomer = useSelector(selectCurrentCustomer);
  console.log("currentCustomer", currentCustomer);
  return (
    <StyledContainer headerPosition={headerPosition}>
      <StyledHeader>
        <img
          src="/assets/a2z-transparent.png"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <SearchContainer>
          <CiSearch />
          <input type="text" placeholder="Search by Product and Brand.." />
        </SearchContainer>
        <LoginButtonContainer>
          <LoginButton firstName={currentCustomer?.firstName} />
          <DropdownContainer className="dropdown">
            {currentCustomer ? <CustomerProfileModal /> : <SignInModal />}
          </DropdownContainer>
        </LoginButtonContainer>
        <CartButton />
      </StyledHeader>
    </StyledContainer>
  );
}

export default MainHeader;
