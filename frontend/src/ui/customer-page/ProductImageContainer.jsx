import styled from "styled-components";

const Container = styled.div`
  width: 50px;
  height: 60px;

  img {
    /* width: 90%;
    height: 90%; */
    /* width: 50px;
    height: 60px; */
    object-fit: cover;
    border-radius: 5px;
    border: ${(props) =>
      props.isActive
        ? "2px solid var(--color-green-500)"
        : "1px solid var(--color-grey-200)"};

    /* &:active {
      border: 1px solid var(--color-green-300);
    } */
  }
`;
function ProductImageContainer({ image, setMainImage, mainImage }) {
  return (
    <Container isActive={mainImage === image}>
      <img
        src={`assets/products/${image}`}
        alt={image}
        onClick={() => setMainImage(image)}
      />
    </Container>
  );
}

export default ProductImageContainer;
