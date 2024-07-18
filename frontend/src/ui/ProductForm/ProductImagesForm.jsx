import styled from "styled-components";
import ProductMainImage from "./ProductMainImage";
import { useEffect, useState } from "react";
import ProductAdditionalImages from "./ProductAdditionalImages";
import { StyledButtons } from "../AdminFormStyles";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";
import { useNavigate } from "react-router-dom";

const StyledImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  margin: 1rem 3rem;
  gap: 1rem;
  height: 70vh;
  border: 1px solid var(--color-grey-300);
  overflow-y: auto;
  /* justify-items: center; */
`;
function ProductImagesForm() {
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState("");
  const [additionalImages, setAdditionalImages] = useState([]);
  // const [additionalImageCount, setAdditionalImageCount] = useState(0);
  // console.log(additionalImages);
  const removeAdditionalImage = (imageId) => {
    setAdditionalImages((prevImages) =>
      prevImages.filter((image) => image.id !== imageId)
    );
  };

  const handleAddImage = () => {
    setAdditionalImages((prevImages) => [
      ...prevImages,
      { id: Date.now(), imageName: "" },
    ]);
    // setAdditionalImageCount((prevCount) => prevCount + 1);
  };

  const onSave = () => {
    console.log(additionalImages);
    console.log("main Images", mainImage);
  };
  const onCancel = () => {
    setAdditionalImages([]);
    setMainImage("");
    navigate(-1);
  };

  return (
    <div>
      <StyledImages>
        <ProductMainImage setMainImage={setMainImage} />
        {additionalImages.length > 0 &&
          additionalImages.map((imageRow, index) => (
            <div key={index}>
              <ProductAdditionalImages
                imageRow={imageRow}
                setAdditionalImages={setAdditionalImages}
                onRemove={() => removeAdditionalImage(imageRow.id)}
                additionalImageCount={index}
              />
            </div>
          ))}
      </StyledImages>
      <StyledButtons>
        <AddButton buttonText={"Add More Images"} createNew={handleAddImage} />
        <AddButton buttonText={"Save"} createNew={onSave} />
        <CancelButton buttonText={"Cancel"} handleCancel={onCancel} />
      </StyledButtons>
    </div>
  );
}

export default ProductImagesForm;
