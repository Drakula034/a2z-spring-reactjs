import styled from "styled-components";
import useGetProductByProductId from "./useGetProductByProductId";
import ProductDescription from "../../ui/ProductDescription";
import ProductImagesContainer from "../../ui/customer-page/ProductImagesContainer";
import ProductDescriptionContainer from "../../ui/customer-page/ProductDescriptionContainer";
import ProductOrderContainer from "../../ui/customer-page/ProductOrderContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import customerSlice from "../../redux/customers/customerSlice";
import { selectCurrentCustomer } from "../../redux/customers/selectors";
import useAddProductToCart from "./carts/useAddProductToCart";
import { totalCartItemsOfProduct } from "../../redux/carts/selectors";

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
  grid-template-columns: 1.2fr 1fr 13rem;
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
  // const selector = useSelector();
  const dispatch = useDispatch();
  const customerId = useSelector(selectCurrentCustomer)?.customerId;
  const {
    data: productsData,
    isLoading,
    error,
  } = useGetProductByProductId(productId);
  const addProductToCart = useAddProductToCart();

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
        productId,
      } = productsData;
      setProductDescriptionDto(productDescriptionDto);
      setProductListImageDto(productListImageDto);
      setProductListDetailsDto(productListDetailsDto?.productDetails);
      setProductOverViewData(productOverViewDto);
    }
  }, [productsData]);
  const initialItemCount = useSelector((state) =>
    totalCartItemsOfProduct(productId)(state)
  );
  // console.log("initialItemCount", initialItemCount);
  const inStock = productOverViewData?.inStock || false;
  // console.log("productsData", productId);
  // console.log("customerId", customerId);

  const handleProductSubmitToCart = async (data) => {
    // console.log("cart", data);
    try {
      const changeInItem = data - initialItemCount;
      await addProductToCart({ customerId, productId, quantity: changeInItem });
      // Additional logic on successful addition, like showing a success message or updating the cart state.
    } catch (error) {
      // Handle error, like showing an error message
      console.error("Failed to add product to cart:", error);
    }
  };

  return (
    <Container>
      <StyledFirstHalf>
        <ProductImagesContainer productListImageDto={productListImageDto} />
        <ProductDescriptionContainer
          productShortDescription={productDescriptionDto?.shortDescription}
          productOverViewData={productOverViewData}
          productListDetailsDto={productListDetailsDto}
        />
        <ProductOrderContainer
          inStock={inStock}
          onSubmit={handleProductSubmitToCart}
          initialItemCount={initialItemCount}
        />
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
