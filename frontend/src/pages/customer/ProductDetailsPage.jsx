import styled from "styled-components";
import useGetProductByProductId from "./useGetProductByProductId";
import ProductDescription from "../../ui/ProductDescription";
import ProductImagesContainer from "../../ui/customer-page/ProductImagesContainer";
import ProductDescriptionContainer from "../../ui/customer-page/ProductDescriptionContainer";
import ProductOrderContainer from "../../ui/customer-page/ProductOrderContainer";
import { useEffect, useState } from "react";

// Container for the entire page
const Container = styled.div`
  margin: 0 10px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
`;

// Grid container for the first half of the page
const StyledFirstHalf = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 13rem;
  gap: 1rem;
  margin-top: 2rem;
  height: auto; /* Adjust height based on content */
`;

// Styling for Product Description
const DescriptionContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

function ProductDetailsPage({ productId }) {
  const {
    data: productsData,
    isLoading,
    error,
  } = useGetProductByProductId(productId);

  const [productDescriptionDto, setProductDescriptionDto] = useState(null);
  const [productListImageDto, setProductListImageDto] = useState(null);
  const [productOverViewData, setProductOverViewData] = useState(null);
  const [productListDetailsDto, setProductListDetailsDto] = useState(null);

  useEffect(() => {
    if (productsData) {
      const {
        productDescriptionDto,
        productListImageDto,
        productListDetailsDto,
        productOverViewDto,
      } = productsData;
      setProductDescriptionDto(productDescriptionDto);
      setProductListImageDto(productListImageDto);
      setProductListDetailsDto(productListDetailsDto?.productDetails);
      setProductOverViewData(productOverViewDto);
    }
  }, [productsData]);

  return (
    <Container>
      <StyledFirstHalf>
        <ProductImagesContainer productListImageDto={productListImageDto} />
        <ProductDescriptionContainer
          productShortDescription={productDescriptionDto?.shortDescription}
          productOverViewData={productOverViewData}
          productListDetailsDto={productListDetailsDto}
        />
        <ProductOrderContainer />
      </StyledFirstHalf>
      <DescriptionContainer>
        <ProductDescription
          description={productDescriptionDto?.fullDescription}
          title="Product Description"
        />
      </DescriptionContainer>
    </Container>
  );
}

export default ProductDetailsPage;
