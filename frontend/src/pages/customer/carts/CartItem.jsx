import styled from "styled-components";
import useGetProductInfoForCart from "./useGetProductInfoForCart";
import PriceDetails from "./PriceDetails";
import CartDelivaryDate from "./CartDelivaryDate";
import { RUPEES } from "../../../constants/symbol-constants";
import ProductQuantityButton from "../../../ui/ProductQuantityButton";
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* Align items in the center vertically */
  padding: 1rem 0; /* Add some padding for spacing */
  margin-right: 0;
`;

const StyledSelect = styled.input`
  align-items: center;
  margin-right: 8px; /* Increase spacing between checkbox and image */
`;

const StyledImage = styled.div`
  width: 10rem;
  height: 8rem;
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  overflow: hidden; /* Ensure the image fits within the container */

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Maintain aspect ratio and cover the area */
    border-radius: 4px; /* Add slight rounding to corners */
  }
`;

const StyledDetails = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
const StyledInfo = styled.div`
  display: grid;
  grid-template-areas:
    "info delivary"
    "quantity delivary";
  grid-template-columns: 2fr 1fr; /* Two columns with a 2:1 ratio */
  gap: 1rem; /* Set gap to 0 to avoid extra spacing */
  margin-right: 0; /* Ensure there's no extra margin on the right */
  box-sizing: border-box; /* Include padding and border in the element's width and height */
  width: 100%; /* Make sure the width takes up the full space */
`;

const StyledInfoPartFirst = styled.div`
  grid-area: info;
  align-self: start; /* Align the content at the top */
  display: flex;
  flex-direction: column; /* Stack the content vertically */

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0 0 1rem; /* Top and bottom margin for h3 */
  }

  p {
    margin: 0;
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center; /* Vertically align the text and price */
    gap: 1rem; /* Space between elements in the line */

    span {
      &:first-of-type {
        text-decoration: line-through; /* Strike through original price */
        color: grey;
        margin-right: 0.5rem;
      }
      &:nth-of-type(2) {
        font-weight: bold; /* Make discounted price bold */
        color: var(--color-blue-400);
        margin-right: 0.5rem;
      }
    }

    h4 {
      margin: 0;
      font-size: 0.9rem;
      color: green;
      font-weight: normal;
      display: inline; /* Ensure it stays on the same line */
    }
  }
`;

const StyledInfoPartSecond = styled.div`
  grid-area: delivary;
`;

const StyledPartThird = styled.div`
  grid-area: quantity;
  display: flex;
  align-items: center; /* Centers items vertically */
  gap: 10px; /* Adds space between the items */

  h5 {
    margin: 0; /* Removes default margin for h5 */
    font-size: 0.8rem; /* Adjust the font size as needed */
    color: #007185; /* Set the color of the text */
    cursor: pointer;
  }
`;

function CartItem({ cartItem }) {
  const rupees = RUPEES;
  const { productId, cartId, quantity } = cartItem || [];
  const { data: product } = useGetProductInfoForCart(productId);
  //   console.log(product);

  const { mainImage, productName, discountPercent, price } = product || [];
  //   const mainImage = product?.mainImage;
  const productPriceForCustomer = (
    (price * (100 - parseFloat(discountPercent))) /
    100
  ).toFixed(2);

  return (
    <Container>
      <StyledSelect type="checkbox" />
      <StyledImage>
        {mainImage && (
          <img src={`/public/assets/products/${mainImage}`} alt="Product" />
        )}
      </StyledImage>
      <StyledDetails>
        <StyledInfo>
          <StyledInfoPartFirst>
            <h3>{productName}</h3>
            <p>
              <span>
                {rupees}
                {price}{" "}
              </span>
              <span>
                {rupees}
                {productPriceForCustomer} <h4>{discountPercent}% off</h4>
              </span>
            </p>
          </StyledInfoPartFirst>
          <StyledInfoPartSecond>
            <CartDelivaryDate />
          </StyledInfoPartSecond>
          <StyledPartThird>
            <ProductQuantityButton initialQuantity={quantity} />
            <h5>Delete</h5>
          </StyledPartThird>
        </StyledInfo>
      </StyledDetails>
    </Container>
  );
}

export default CartItem;
