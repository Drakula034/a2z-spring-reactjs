import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  /* background-color: #007bff; Adjust as needed */
  color: var(--color-grey-700);
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    /* background-color: #0056b3; Adjust as needed */
  }

  span {
    display: flex;
    align-items: center;
    margin-right: 0.5rem; /* Adjust as needed */
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
function CartButton() {
  return (
    <StyledContainer>
      <span>
        <IoCartOutline />
      </span>
      Cart
    </StyledContainer>
  );
}

export default CartButton;
