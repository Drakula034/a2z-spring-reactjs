import styled from "styled-components";
import MainHeader from "../../ui/customer-page/MainHeader";
import CategoryPageSectionContent from "./CategoryPageSectionContent";
import Footer from "../../ui/customer-page/Footer";

const Container = styled.div`
  height: auto; /* Adjust height to fit content */
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 1rem;
  box-sizing: border-box;
  padding-top: 4rem;
`;
function CategoryPage() {
  return (
    <Container>
      <MainHeader headerPosition="relative" />
      <CategoryPageSectionContent />
      <Footer />
    </Container>
  );
}

export default CategoryPage;
