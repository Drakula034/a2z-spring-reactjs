import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Container = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 6px;
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    color: ${(props) => (props.inStock ? "green" : "red")};
  }

  div {
    display: flex;
    align-items: center;

    button {
      padding: 0.2rem 0.5rem;
    }

    span {
      margin: 0 0.5rem;
    }
  }
`;

const AddToCartButton = styled.button`
  background-color: ${(props) =>
    props.inStock ? "var(--color-blue-400)" : "var(--color-grey-400)"};
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.inStock ? "pointer" : "not-allowed")};
  opacity: ${(props) => (props.inStock ? "1" : "0.5")};

  &:hover {
    background-color: ${(props) =>
      props.inStock ? "var(--color-green-500)" : "var(--color-grey-400)"};
  }
`;

function ProductOrderContainer({ inStock, onSubmit, initialItemCount = 1 }) {
  const [quantity, setQuantity] = useState(initialItemCount);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container inStock={inStock}>
      <h4>{inStock ? "In Stock" : "Out of Stock"}</h4>
      <div>
        <button onClick={handleDecrease}>
          <FaMinus />
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>
          <FaPlus />
        </button>
      </div>
      <AddToCartButton
        inStock={inStock}
        disabled={!inStock}
        onClick={() => onSubmit(quantity)}
      >
        Add to Cart
      </AddToCartButton>
    </Container>
  );
}

export default ProductOrderContainer;
