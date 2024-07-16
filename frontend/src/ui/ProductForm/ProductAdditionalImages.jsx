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
  setAdditionalImageCount,
  removeImage,
  imageName,
  imageId,
  initialImage,
}) {
  const [image, setImage] = useState(initialImage || "");

  const handleAdditionalImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = (error) => {
        throw new Error("Error reading file:", error);
      };
      reader.readAsDataURL(file);
      setAdditionalImages((prevImages) => [
        ...prevImages,
        { id: imageId, name: file.name, src: reader.result },
      ]);
      setAdditionalImageCount((prevCount) => prevCount + 1);
    }
  };

  const handleRemoveClick = () => {
    removeImage(imageId);
  };

  useEffect(() => {
    if (initialImage) {
      setImage(initialImage);
    }
  }, [initialImage]);

  return (
    <div>
      <StyledImageContainer>
        <ImageLabel>
          <label>Additional Image: {2}</label>
          <MdCancel onClick={handleRemoveClick} />
        </ImageLabel>
        <StyledImage>
          {image ? (
            <img src={image} alt={`additional image ${imageName}`} />
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
