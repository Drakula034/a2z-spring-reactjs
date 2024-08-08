import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* Required for positioning the quantity */
  color: var(--color-grey-700);
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    border: 1px solid blue;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  .quantity {
    position: absolute;
    left: 1.2rem; /* Adjust as needed */
    top: -0.1rem; /* Adjust as needed */
    background: red; /* Background color of the badge */
    color: white; /* Text color */
    border-radius: 50%;
    width: 1.2rem; /* Size of the badge */
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem; /* Font size of the quantity */
  }
`;

function CartButton({ quantity }) {
  return (
    <StyledContainer>
      <IoCartOutline />
      {quantity > 0 && <div className="quantity">{quantity}</div>}
      Cart
    </StyledContainer>
  );
}

export default CartButton;
