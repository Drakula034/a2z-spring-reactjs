import styled from "styled-components";
import LoginButton from "../LoginButton";
import CartButton from "../CartButton";
import { CiSearch } from "react-icons/ci";

const StyledContainer = styled.div`
  position: fixed; /* Fixes the header at the top */
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  width: 100%;
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
  justify-items: center;
  column-gap: 2rem;
  margin-left: 4rem;

  img {
    height: 3rem;
    width: 5rem;
    align-self: flex-start;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    height: 2.5rem;
    width: 40rem;
    padding: 0.5rem 2rem 0.5rem 3rem; /* Add padding to accommodate the icon */
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background-color: var(--color-grey-100);
    font-size: medium;
  }

  svg {
    position: absolute;
    left: 0.75rem; /* Adjust icon position */
    color: var(--color-grey-400);
    width: 1.5rem;
    height: 1.5rem;
  }
`;

function MainHeader() {
  return (
    <StyledContainer>
      <StyledHeader>
        <img src="/assets/a2z-transparent.png" alt="" />
        <SearchContainer>
          <CiSearch />
          <input type="text" placeholder="Search by Product and Brand.." />
        </SearchContainer>
        <LoginButton />
        <CartButton />
      </StyledHeader>
    </StyledContainer>
  );
}

export default MainHeader;
