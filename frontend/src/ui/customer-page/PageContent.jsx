import styled from "styled-components";
import { StyledContainer } from "./PageContent.styles";

const Container = styled.div`
  padding-top: 4rem;
  overflow-y: auto;
`;
function PageContent() {
  return (
    <Container>
      <StyledContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        sint. Ipsum at dolorem fugit nesciunt quae pariatur soluta possimus
        sapiente, aut est! Sit fuga beatae autem, sapiente deserunt minus quia.
      </StyledContainer>
    </Container>
  );
}

export default PageContent;
