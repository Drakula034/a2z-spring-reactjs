import styled from "styled-components";
import MainHeader from "../../../ui/customer-page/MainHeader";
import { useLocation } from "react-router-dom";
import AccountProfile from "./AccountProfile";
import Footer from "../../../ui/customer-page/Footer";

const Container = styled.div`
  height: auto; /* Adjust height to fit content */
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 1rem;
  box-sizing: border-box;
  background-color: var(--color-grey-100);
`;
function AccountPage() {
  //   const queryParams = new URLSearchParams(useLocation().search);
  //   const account = queryParams.get("account");
  return (
    <Container>
      <MainHeader />
      <AccountProfile />
      <Footer />
    </Container>
  );
}

export default AccountPage;
