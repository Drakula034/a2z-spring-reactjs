import styled from "styled-components";
import MainHeader from "../../ui/customer-page/MainHeader";
import CategoryPageSectionContent from "./CategoryPageSectionContent";
import Footer from "../../ui/customer-page/Footer";
import { useLocation } from "react-router-dom";
import ProductDetailsPage from "./ProductDetailsPage";
import AccountProfile from "./CustomerAccount/AccountProfile";

const Container = styled.div`
  height: auto; /* Adjust height to fit content */
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 1rem;
  box-sizing: border-box;
  /* padding-top: 4rem; */
`;

function CategoryPage() {
  const queryParams = new URLSearchParams(useLocation().search);
  const category = queryParams.get("category");
  const productId = queryParams.get("productId");
  // const account = queryParams.get("account");

  return (
    <Container>
      <MainHeader headerPosition="relative" />
      {/* <DebugDiv>Header should be visible here</DebugDiv> */}
      {category && <CategoryPageSectionContent category={category} />}
      {productId && <ProductDetailsPage productId={productId} />}
      {/* {account && <AccountProfile />} */}
      <Footer />
    </Container>
  );
}

export default CategoryPage;
