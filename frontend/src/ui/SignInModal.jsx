import styled from "styled-components";

const Container = styled.div`
  height: 7rem;
  width: 15rem;
  background-color: rgba(200, 200, 200, 0.8);
  transform: translateX(-30%);
  border: 1px solid var(--color-grey-300);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  cursor: pointer;
  z-index: 1000; /* Ensure it appears above other content */

  h5 {
    font-size: 12px;
    color: var(--color-grey-700);
    margin: 5px 3rem 0 3rem;
    span {
      color: var(--color-blue-400);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Button = styled.button`
  border-radius: 1rem;
  padding: 0.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
    color: var(--color-blue-400);
  }
`;

function SignInModal() {
  return (
    <Container>
      <Button>Sign In</Button>
      <h5>
        New Customer? <span>Sign Up</span>
      </h5>
    </Container>
  );
}

export default SignInModal;
