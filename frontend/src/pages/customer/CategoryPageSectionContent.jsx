import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useGetProductsForCategoryInHomePage from "./useGetProductsForCategoryInHomePage";
import useGetProductsForCategoryInCategoryPage from "./useGetProductsForCategoryInCategoryPage";
import ProductContainerInMainPage from "../../ui/ProductContainerInMainPage";
import ProductContainerForCategory from "../../ui/ProductContainerForCategory";

const Container = styled.div`
  background-color: "red";
`;
const querySize = 9;
function CategoryPageSectionContent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  //   console.log(category);
  const { data: fetchedCategoryData } = useGetProductsForCategoryInCategoryPage(
    category,
    querySize
  );
  //   console.log(fetchedCategoryData);

  return (
    <Container>
      {/* <ProductContainerInMainPage product={fetchedCategoryData} /> */}
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Welcome to {category} section
      </h2>
      <ProductContainerForCategory products={fetchedCategoryData} />
    </Container>
  );
}

export default CategoryPageSectionContent;
