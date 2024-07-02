import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  font-family: "IBM Plex Sans", sans-serif;
  background-color: var(--color-blue-300);
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  margin: 0.3rem auto;

  &:hover {
    background-color: var(--color-blue-600);
    color: black;
  }
`;
function AddButton({ buttonText }) {
  return <Button>{buttonText}</Button>;
}

export default AddButton;
