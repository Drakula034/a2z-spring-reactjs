import styled from "styled-components";
import ProductMainImage from "./ProductMainImage";
import { useEffect, useState } from "react";
import ProductAdditionalImages from "./ProductAdditionalImages";

const StyledImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  margin: 1rem 3rem;
  gap: 1rem;
  /* justify-items: center; */
`;
function ProductImagesForm() {
  const [mainImage, setMainImage] = useState("");
  // console.log(mainImage);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [additionalImageCount, setAdditionalImageCount] = useState(1);
  // console.log(additionalImages);
  const removeAdditionalImage = (imageId) => {
    const updatedImages = additionalImages.filter(
      (image) => image.id !== imageId
    );
    setAdditionalImages(updatedImages);
    setAdditionalImageCount((prevCount) => prevCount - 1);
  };
  console.log(additionalImageCount);
  return (
    <StyledImages>
      <ProductMainImage setMainImage={setMainImage} />
      {mainImage && additionalImageCount >= additionalImages.length && (
        <>
          {" "}
          <ProductAdditionalImages
            setAdditionalImages={setAdditionalImages}
            setAdditionalImageCount={setAdditionalImageCount}
          />
          {additionalImages.map((image) => (
            <ProductAdditionalImages
              key={image.id}
              setAdditionalImages={setAdditionalImages}
              setAdditionalImageCount={setAdditionalImageCount}
              removeImage={removeAdditionalImage}
              imageName={image.name}
              imageId={image.id}
              initialImage={image.src}
            />
          ))}
          {/* {additionalImages.map((image, index) => console.log(image.name))} */}
        </>
      )}
    </StyledImages>
  );
}

export default ProductImagesForm;
