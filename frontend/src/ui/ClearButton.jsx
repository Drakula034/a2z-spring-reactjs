import styled from "styled-components";

const Button = styled.button`
  font-size: 0.8rem;
  font-family: "IBM Plex Sans", sans-serif;
  padding: 5px;
  height: fit-content;
  width: fit-content;
  border-color: transparent;
  background-color: var(--color-grey-400);
  border-radius: 4px;
  color: white;

  &:hover {
    background-color: var(--color-grey-600);
  }
`;
function ClearButton() {
  return <Button>Clear</Button>;
}

export default ClearButton;
