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
function ProductDescription({ description, title }) {
  //   return <pre>{escapeHtml(fullDescription)}</pre>;
  return (
    <Container>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
}

export default ProductDescription;
