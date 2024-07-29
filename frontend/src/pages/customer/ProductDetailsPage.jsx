import styled from "styled-components";
import useGetProductByProductId from "./useGetProductByProductId";
import ProductFullDescription from "../../ui/ProductFullDescription";
import ProductImagesContainer from "../../ui/customer-page/ProductImagesContainer";
import ProductDescriptionContainer from "../../ui/customer-page/ProductDescriptionContainer";
import ProductOrderContainer from "../../ui/customer-page/ProductOrderContainer";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const StyledFirstHalf = styled.div`
  margin-top: 2rem;
  height: 80vh;
  display: grid;
  grid-template-columns: 1.4fr 1fr 13rem;
  gap: 1rem;
`;
function ProductDetailsPage({ productId }) {
  const {
    data: productsData,
    isLoading,
    error,
  } = useGetProductByProductId(productId);
  const [productDescriptionDto, setProductDescriptionDto] = useState(null);
  const [productListImageDto, setProductListImageDto] = useState(null);

  useEffect(() => {
    if (productsData) {
      const { productDescriptionDto, productListImageDto } = productsData;
      setProductDescriptionDto(productDescriptionDto);
      setProductListImageDto(productListImageDto);
    }
  }, [productsData]);

  return (
    <Container>
      <StyledFirstHalf>
        <ProductImagesContainer productListImageDto={productListImageDto} />
        <ProductDescriptionContainer />
        <ProductOrderContainer />
      </StyledFirstHalf>
      <ProductFullDescription
        fullDescription={productDescriptionDto?.fullDescription}
      />
    </Container>
  );
}

export default ProductDetailsPage;
