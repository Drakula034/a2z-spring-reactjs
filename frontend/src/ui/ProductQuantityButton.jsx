import styled from "styled-components";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  color: #333;
  font-size: 0.7rem;
  padding: 0.3rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const QuantityDisplay = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

function ProductQuantityButton({
  initialQuantity = 1,
  setInitialQuantity,
  handleProductQuantityDecrease,
  handleProductQuantityIncrease,
}) {
  // const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    // setQuantity(quantity + 1);
    setInitialQuantity(initialQuantity + 1);
    handleProductQuantityIncrease(initialQuantity + 1);
  };

  const handleDecrease = () => {
    if (initialQuantity > 1) {
      setInitialQuantity(initialQuantity - 1);
      handleProductQuantityDecrease(initialQuantity - 1);
    }
  };

  return (
    <Container>
      <Button onClick={handleDecrease} disabled={initialQuantity <= 1}>
        <FaMinus />
      </Button>
      <QuantityDisplay>{initialQuantity}</QuantityDisplay>
      <Button onClick={handleIncrease}>
        <FaPlus />
      </Button>
    </Container>
  );
}

export default ProductQuantityButton;
