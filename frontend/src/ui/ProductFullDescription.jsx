import styled from "styled-components";

const Container = styled.div`
  padding: 20px;

  h2 {
    font-size: 1.5rem;
  }
  div {
    font-size: 1rem;
    font-family: "Times New Roman", Times, serif;
  }
`;
function ProductFullDescription({ fullDescription }) {
  //   return <pre>{escapeHtml(fullDescription)}</pre>;
  return (
    <Container>
      <h2>Product Description</h2>
      <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
    </Container>
  );
}

export default ProductFullDescription;
