import { CiImageOn } from "react-icons/ci";
import { StyledImage, StyledImageContainer } from "../AdminFormStyles";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";

const ImageLabel = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
`;
function ProductAdditionalImages({ setAdditionalImages, onRemove, imageRow }) {
  const [image, setImage] = useState({ id: "", imageName: "" });

  const handleAdditionalImageChange = (event) => {
    // setImage({ id: "", imageName: "" }); // Clear previous image
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      const newImage = { id: Date.now(), imageName: file.name };
      reader.onload = () => {
        setImage({ id: newImage.id, imageName: reader.result });
      };
      // const newImage = { id: imageRow.id, imageName: file.name };
      setAdditionalImages((prevImages) =>
        prevImages.map((img) => (img.id === imageRow.id ? newImage : img))
      );
      reader.onerror = (error) => {
        throw new Error("Error reading file:", error);
      };
      reader.readAsDataURL(file);
      // console.log(file.name);
    }
  };

  return (
    <div>
      <StyledImageContainer>
        <ImageLabel>
          <label>Additional Image: {2}</label>
          <MdCancel onClick={onRemove} />
        </ImageLabel>
        <StyledImage>
          {image.imageName ? (
            <img src={image.imageName} alt={`additional image ${2}`} />
          ) : (
            <CiImageOn size={100} />
          )}
        </StyledImage>
        <input
          type="file"
          name="additionalImage"
          onChange={handleAdditionalImageChange}
        />
      </StyledImageContainer>
    </div>
  );
}

export default ProductAdditionalImages;
