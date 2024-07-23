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
function ProductAdditionalImages({
  setAdditionalImages,
  onRemove,
  imageRow,
  additionalImageCount,
}) {
  const [image, setImage] = useState({ id: "", imageName: "" });
  const [imageChanged, setChangedImage] = useState(false);
  console.log(imageRow);

  const handleAdditionalImageChange = (event) => {
    // setImage({ id: "", imageName: "" }); // Clear previous image
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      const newImage = { id: Date.now(), imageName: file.name };
      reader.onload = () => {
        setImage({ id: newImage.id, imageName: reader.result });
        setChangedImage(true);
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
          <label>Additional Image: {additionalImageCount + 1}</label>
          <MdCancel onClick={onRemove} />
        </ImageLabel>
        <StyledImage>
          {imageChanged ? (
            <img
              src={image.imageName}
              alt={`additional image ${additionalImageCount + 1}`}
            />
          ) : imageRow?.imageName ? (
            <img src={`/public/assets/products/${imageRow.imageName}`} />
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
