import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductImageContainer from "./ProductImageContainer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 10px;
  }

  img {
    margin-top: 2rem;
    width: 100%;
    height: 30rem;
    object-fit: contain;
  }
`;

const MainImage = styled.img`
  margin-top: 2rem;
  width: 90%;
  height: 30rem;
  object-fit: contain;
  /* border: 2px solid #2285e8; Add a border to the main image */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional: Add a shadow */
`;
function ProductImagesContainer({ productListImageDto }) {
  //   const [mainImage, setMainImage] = useState("");
  const images = [
    productListImageDto?.mainImage,
    ...(productListImageDto?.productImages || []).map((image) => image.name),
  ];

  // console.log(images);
  const [mainImage, setMainImage] = useState(images[0] || "");
  //   useEffect(() => {
  //     if (images) {
  //       setMainImage(images[0]);
  //     }
  //   }, [images]);
  //   const changeMainImage = (e) => {
  //     console.log(e.target);
  //   };

  //   const [mainImage, setMainImage] = useState("");

  //   useEffect(() => {
  //     if (images.length > 0) {
  //       setMainImage(images[0]);
  //     }
  //   }, [images]);

  return (
    <Container>
      <div>
        {(images || []).map((image, index) => (
          <ProductImageContainer
            key={index}
            image={image}
            setMainImage={setMainImage}
            mainImage={mainImage}
          />
        ))}
      </div>
      <MainImage src={`assets/products/${mainImage}`} />
    </Container>
  );
}

export default ProductImagesContainer;
