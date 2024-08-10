import styled from "styled-components";
import MainHeader from "../../../ui/customer-page/MainHeader";
import CartInfo from "./CartInfo";

const Container = styled.div`
  /* background-color: #eaeded; */
  /* border-top: 1px solid #eaeded; */
  height: calc(100vh - 4rem); // Corrected using calc for height
  /* width: calc(99vw - 2px); // Corrected using calc for width */
  width: 100vw;
`;

function CartPage() {
  return (
    <Container>
      <MainHeader />
      <CartInfo />
    </Container>
  );
}

export default CartPage;
