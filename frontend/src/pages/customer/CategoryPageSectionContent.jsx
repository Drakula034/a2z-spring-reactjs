import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useGetProductsForCategoryInHomePage from "./useGetProductsForCategoryInHomePage";
import useGetProductsForCategoryInCategoryPage from "./useGetProductsForCategoryInCategoryPage";

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
  console.log(fetchedCategoryData);

  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
      perspiciatis harum accusantium assumenda, deleniti consequuntur, omnis
      tenetur facere id nemo quo pariatur at voluptatibus adipisci aliquid
      nostrum. Illo, officiis est?
    </Container>
  );
}

export default CategoryPageSectionContent;
