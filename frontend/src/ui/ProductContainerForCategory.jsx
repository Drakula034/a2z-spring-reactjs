import styled from "styled-components";
import ProductContainerInMainPage from "./ProductContainerInMainPage";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
`;
function ProductContainerForCategory({ products }) {
  // console.log(products);
  return (
    <Container>
      {(products || []).map((product) => (
        <ProductContainerInMainPage key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default ProductContainerForCategory;
