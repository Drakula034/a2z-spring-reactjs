import styled from "styled-components";
import PriceDetails from "./PriceDetails";
import useGetItemsFromCartItems from "./useGetItemsFromCartItems";
import { useSelector } from "react-redux";
import { selectCurrentCustomer } from "../../../redux/customers/selectors";
import { cartItems } from "../../../redux/carts/selectors";
import CartItems from "./CartItems";

const Container = styled.div`
  margin-top: 4rem;
  background-color: #eaeded;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1.5rem; /* Adds space between the columns */
  padding: 2rem 8rem; /* Adds some padding inside the container */
`;

const InfoContainer = styled.div`
  background-color: #fff;
  padding: 1.5rem; /* Adds padding inside the info container */
  border-radius: 8px; /* Adds a slight border radius for a softer look */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
  h2 {
    margin: 1rem 0 0 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

function CartInfo() {
  // const {data: customerInfo}
  const customer = useSelector(selectCurrentCustomer);
  const cartProductItems = useSelector(cartItems);
  const cartProductItemsArray = Object.values(cartProductItems);

  //   console.log("cartItems: " + cartProductItems);
  const customerId = customer?.customerId;

  return (
    <Container>
      <InfoContainer>
        <h2>Shopping Cart</h2>
        {/* Add your cart items here */}
        <CartItems cartProductItems={cartProductItemsArray} />
      </InfoContainer>
      <PriceDetails />
    </Container>
  );
}

export default CartInfo;