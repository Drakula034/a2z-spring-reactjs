import styled from "styled-components";
import { StyledContainer } from "../../ui/customer-page/PageContent.styles";
import useGetProductsForCategoryInHomePage from "./useGetProductsForCategoryInHomePage";
import PageSectionContent from "../../ui/customer-page/PageSectionContent";

const Container = styled.div`
  padding-top: 4rem;
  overflow-y: auto;
`;
function PageContent() {
  const categoryName = "Laptop";
  const { data: laptopMainPageData } =
    useGetProductsForCategoryInHomePage("Laptop");
  const { data: smartPhonesMainPageData } =
    useGetProductsForCategoryInHomePage("SmartPhones");
  console.log(smartPhonesMainPageData);
  // console.log(laptopMainPageData);
  return (
    <Container>
      <StyledContainer>
        <PageSectionContent
          categoryMainPageData={laptopMainPageData}
          typesOfData={"Laptop"}
        />
        <PageSectionContent
          categoryMainPageData={smartPhonesMainPageData}
          typesOfData={"SmartPhone"}
        />
      </StyledContainer>
    </Container>
  );
}

export default PageContent;
