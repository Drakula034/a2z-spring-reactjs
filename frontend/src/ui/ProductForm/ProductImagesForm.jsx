import styled from "styled-components";
import ProductMainImage from "./ProductMainImage";
import { useEffect, useState } from "react";
import ProductAdditionalImages from "./ProductAdditionalImages";
import { StyledButtons } from "../AdminFormStyles";
import AddButton from "../AddButton";
import CancelButton from "../CancelButton";

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
  const [mainImage, setMainImage] = useState("");
  // console.log(mainImage);
  const [additionalImages, setAdditionalImages] = useState([
    // { id: "", imageName: "" },
  ]);
  const [additionalImageCount, setAdditionalImageCount] = useState(1);
  // console.log(additionalImages);
  const removeAdditionalImage = (imageId) => {
    setAdditionalImages((prevImages) =>
      prevImages.filter((image) => image.id !== imageId)
    );
    // console.log(additionalImages);
  };
  // console.log(additionalImages);
  // console.log(additionalImageCount);
  const handleAddImage = () => {
    setAdditionalImages((prevImages) => [
      ...prevImages,
      { id: Date.now(), imageName: "" },
    ]);
  };

  const onSave = () => {
    console.log(additionalImages);
    console.log("main Images", mainImage);
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
              />
            </div>
          ))}
      </StyledImages>
      <StyledButtons>
        <AddButton buttonText={"Add More Details"} createNew={handleAddImage} />
        <AddButton buttonText={"Save"} createNew={onSave} />
        <CancelButton buttonText={"Cancel"} />
      </StyledButtons>
    </div>
  );
}

export default ProductImagesForm;
