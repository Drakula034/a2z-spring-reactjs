import styled from "styled-components";
import { StyledContainer } from "../../ui/customer-page/PageContent.styles";
import useGetProductsForLaptopInHomePage from "./useGetProductsForLaptopInHomePage";
import PageSectionContent from "../../ui/customer-page/PageSectionContent";

const Container = styled.div`
  padding-top: 4rem;
  overflow-y: auto;
`;
function PageContent() {
  const categoryName = "Laptop";
  const { data: laptopMainPageData } =
    useGetProductsForLaptopInHomePage(categoryName);
  // console.log(laptopMainPageData);
  return (
    <Container>
      <StyledContainer>
        <PageSectionContent laptopMainPageData={laptopMainPageData} />
      </StyledContainer>
    </Container>
  );
}

export default PageContent;
