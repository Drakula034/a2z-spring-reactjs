import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid var(--color-grey-400);
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: center;
  gap: 5px; /* Add space between the elements */

  img {
    width: 100%;
    height: 12rem;
    object-fit: contain; /* Ensure the image maintains aspect ratio */
    background-color: var(--color-grey-100);
  }
  h3 {
    margin-bottom: 0.5rem;
  }
`;

function ProductContainerInMainPage({ product }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(product.id);
    navigate(`/products?productId=${product.id}`, { replace: true });
  };
  return (
    <Container>
      <div onClick={handleClick}>
        <img
          src={`/public/assets/products/${product.productMainImage}`}
          alt={product.name}
        />
      </div>
      <h3>{product.name}</h3>
    </Container>
  );
}

export default ProductContainerInMainPage;
