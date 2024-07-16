import { CiImageOn } from "react-icons/ci";
import styled from "styled-components";
import { StyledImage, StyledImageContainer } from "../AdminFormStyles";
import { useState } from "react";

// const StyledMainImage = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 300px;
//   height: 300px;
//   border: 1px solid var(--color-grey-300);
//   /* padding: 1rem; */
// `;
// const StyledImage = styled.div`
//   width: 100%;
//   height: 70%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid var(--color-grey-300);
//   margin-bottom: 10px;

//   img {
//     max-width: 100%;
//     max-height: 100%;
//     object-fit: cover;
//   }
// `;
function ProductMainImage({ setMainImage }) {
  const [image, setImage] = useState("");
  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setMainImage(file.name);
    }
  };
  return (
    <StyledImageContainer>
      <label>Main Image</label>
      <StyledImage>
        {image ? (
          <img src={image} alt="main image" />
        ) : (
          <CiImageOn size={100} />
        )}
      </StyledImage>

      <input type="file" name="mainImage" onChange={handleMainImageChange} />
    </StyledImageContainer>
  );
}

export default ProductMainImage;
