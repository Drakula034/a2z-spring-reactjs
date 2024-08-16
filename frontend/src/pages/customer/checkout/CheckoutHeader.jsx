import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  /* justify-content: space-around; Space out the content evenly */
  height: 5rem;
  padding: 0 2rem; /* Add padding to the container */
  background-color: #f5f5f5; /* Example background color */

  img {
    height: 100%; /* Make the image fill the container's height */
    margin-left: 15rem;
  }

  h1 {
    font-size: 2.5rem; /* Set font size */
    font-weight: normal; /* Make the text bold */
    color: #333; /* Text color */
    margin-left: 18rem; /* Add distance between the image and the text */
  }
`;

function CheckoutHeader() {
  return (
    <Container>
      <img src="/public/assets/a2z-transparent.png" alt="a2z.com" />
      <h1>Checkout</h1>
    </Container>
  );
}

export default CheckoutHeader;
