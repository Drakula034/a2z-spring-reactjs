import styled from "styled-components";
import ProductContainerInMainPage from "../ProductContainerInMainPage";

const Container = styled.div`
  background-color: var(--color-grey-100);
  /* height: 300px; */
  border: none solid var(--color-grey-200);
  display: flex;
  flex-direction: column; /* Change to column to stack header and sections vertically */
  z-index: 100;
  margin-bottom: 1rem;
`;

const StyledHeader = styled.div`
  padding: 5px; /* Add padding for spacing */
  display: flex;
  justify-content: space-between; /* Space out header items */
  align-items: center; /* Center items vertically */
  border-bottom: 2px solid #ffffff; /* Optional border to separate header from sections */
`;

const Title = styled.h2`
  margin: 0; /* Remove default margin */
  color: var(--color-blue-400); /* White color for the text */
  font-size: 1.5rem; /* Font size for the heading */
`;

const Button = styled.button`
  padding: 0.5rem 1rem; /* Padding inside the button */
  font-size: 1rem; /* Font size for the button text */
  color: #ffffff; /* White text color */
  background-color: #f57c00; /* Button background color */
  border: none; /* Remove default border */
  border-radius: 4px; /* Rounded corners for the button */
  cursor: pointer; /* Change cursor on hover */
  transition: background-color 0.3s ease; /* Smooth transition for background color */

  &:hover {
    background-color: #e64a19; /* Darker background on hover */
  }

  &:focus {
    outline: none; /* Remove default outline on focus */
  }
`;
const StyledSections = styled.div`
  display: grid;
  grid-template-columns: repeat(
    4,
    minmax(250px, 1fr)
  ); /* Adjust column width as needed */
  overflow-x: auto; /* Add horizontal scrolling if needed */
  padding: 2px; /* Add padding for spacing */
  gap: 1rem; /* Add space between product containers */
  margin-bottom: 0.5rem;
`;

function PageSectionContent({ categoryMainPageData, typesOfData }) {
  return (
    <Container>
      <StyledHeader>
        <Title>Top {typesOfData} deals</Title>
        <Button>View All</Button>
      </StyledHeader>

      <StyledSections>
        {(categoryMainPageData || []).map((item, index) => (
          <ProductContainerInMainPage key={index} product={item} />
        ))}
      </StyledSections>
    </Container>
  );
}

export default PageSectionContent;
