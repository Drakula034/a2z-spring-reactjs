import { CiImageOn } from "react-icons/ci";
import styled from "styled-components";
import { StyledImage, StyledImageContainer } from "../AdminFormStyles";
import { useState } from "react";

function ProductMainImage({ setMainImage, mainImage }) {
  const [image, setImage] = useState("");
  const [imageChanged, setChangedImage] = useState(false);
  console.log(mainImage);
  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setChangedImage(true);
      };
      reader.readAsDataURL(file);
      setMainImage(file.name);
    }
  };
  return (
    <StyledImageContainer>
      <label>Main Image</label>
      <StyledImage>
        {imageChanged ? (
          <img src={image} alt="changed image" />
        ) : mainImage ? (
          <img src={`/public/assets/products/${mainImage}`} alt="main image" />
        ) : (
          <CiImageOn size={100} />
        )}
      </StyledImage>

      <input type="file" name="mainImage" onChange={handleMainImageChange} />
    </StyledImageContainer>
  );
}

export default ProductMainImage;
