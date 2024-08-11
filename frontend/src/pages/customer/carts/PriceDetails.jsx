import styled from "styled-components";

const Container = styled.div`
  h3 {
    /* margin: 1rem 0 0 0; */
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
`;
function PriceDetails() {
  return (
    <Container>
      <h3>Price Details</h3>
    </Container>
  );
}

export default PriceDetails;
