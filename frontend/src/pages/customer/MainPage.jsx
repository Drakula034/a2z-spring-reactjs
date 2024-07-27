import CategoryHeader from "../../ui/customer-page/CategoryHeader";
import Footer from "../../ui/customer-page/Footer";
import MainHeader from "../../ui/customer-page/MainHeader";
import PageContent from "./PageContent";
import { StyledContainer } from "./MainPage.styles";

function MainPage() {
  return (
    <StyledContainer>
      <MainHeader />
      <PageContent />
      <Footer />
    </StyledContainer>
  );
}

export default MainPage;
