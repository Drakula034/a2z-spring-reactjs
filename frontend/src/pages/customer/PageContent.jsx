import styled from "styled-components";
import { StyledContainer } from "../../ui/customer-page/PageContent.styles";
import useGetProductsForCategoryInHomePage from "./useGetProductsForCategoryInHomePage";
import PageSectionContent from "../../ui/customer-page/PageSectionContent";

const Container = styled.div`
  padding-top: 4rem;
  overflow-y: auto;
`;
function PageContent() {
  const categoryCnt = 4;
  const { data: laptopMainPageData } = useGetProductsForCategoryInHomePage(
    "Laptop",
    categoryCnt
  );
  const { data: smartPhonesMainPageData } = useGetProductsForCategoryInHomePage(
    "SmartPhones",
    categoryCnt
  );
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
