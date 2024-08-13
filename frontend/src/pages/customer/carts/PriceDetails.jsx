import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  height: max-content;
  width: 100%;
  position: sticky; /* For sticky behavior */
  top: 4rem; /* Adjust based on your header height */
  /* z-index: 1000; Ensure it's above other content */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for depth */

  h3 {
    margin: 0 0 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-grey-200);
    font-size: 1.5rem;
    color: var(--color-primary);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .price,
  .discount,
  .delivery,
  .total {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .break {
    border-bottom: 1px solid var(--color-grey-200);
    margin: 1rem 0;
  }

  .button {
    display: flex;
    justify-content: center; /* Center the button */
    margin-top: 1rem; /* Add margin on top */

    button {
      background-color: var(--color-blue-500);
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: var(--color-green-400);
        color: #fff;
      }
    }
  }
`;

function PriceDetails({ priceDetails }) {
  const { price, discount, quantity } = priceDetails || {};
  const deliveryCharges = 120;
  return (
    <Container>
      <h3>Price Details</h3>
      <InfoContainer>
        <div className="price">
          <div className="title">Item({quantity})</div>
          <div className="value">{price.toFixed(2)}</div>
        </div>
        <div className="discount">
          <div className="title">Discount</div>
          <div className="value">{discount.toFixed(2)}</div>
        </div>
        <div className="delivery">
          <div className="title">Delivery Charges</div>
          <div className="value">{deliveryCharges}</div>
        </div>
        <div className="break" />

        <div className="total">
          <div className="title">Total</div>
          <div className="value">
            {(price + deliveryCharges - discount).toFixed(2)}
          </div>
        </div>
        <div className="button">
          <button>Proceed to Buy</button>
        </div>
      </InfoContainer>
    </Container>
  );
}

export default PriceDetails;
