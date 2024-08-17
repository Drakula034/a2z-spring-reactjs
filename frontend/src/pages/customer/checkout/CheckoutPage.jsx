import styled from "styled-components";
import SelectDeliveryAddress from "./SelectDeliveryAddress";
import PriceDetailsForCheckoutPage from "./PriceDetailsForCheckoutPage";
import LoggedInCustomerInfo from "./LoggedInCustomerInfo";

const Container = styled.div`
  /* margin-top: ; */
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1.5rem; /* Adds space between the columns */
  padding: 2rem 8rem;
  margin: 0 auto;
`;
const CheckOutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
function CheckoutPage() {
  return (
    <Container>
      <CheckOutContainer>
        <LoggedInCustomerInfo />
        <SelectDeliveryAddress />
      </CheckOutContainer>
      <PriceDetailsForCheckoutPage />
    </Container>
  );
}

export default CheckoutPage;
