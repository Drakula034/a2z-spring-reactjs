import styled from "styled-components";

const Button = styled.button`
  font-size: 0.8rem;
  font-family: "IBM Plex Sans", sans-serif;
  padding: 5px;
  border-color: transparent;
  height: fit-content;
  width: fit-content;
  background-color: var(--color-blue-400);
  border-radius: 4px;

  color: white;

  &:hover {
    background-color: var(--color-blue-600);
  }
`;
function SearchButton() {
  return <Button>Search</Button>;
}

export default SearchButton;
