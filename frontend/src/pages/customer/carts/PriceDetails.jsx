import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  padding: 1.5rem; /* Adds padding inside the info container */
  border-radius: 8px; /* Adds a slight border radius for a softer look */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
`;
function PriceDetails() {
  return (
    <Container>
      <h3>Price Details</h3>
    </Container>
  );
}

export default PriceDetails;
