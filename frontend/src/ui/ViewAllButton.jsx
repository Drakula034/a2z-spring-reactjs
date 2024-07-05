import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  font-family: "IBM Plex Sans", sans-serif;
  background-color: var(--color-green-400);
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  margin: 0.3rem auto;
  border-color: transparent;

  &:hover {
    background-color: var(--color-green-700);
  }
`;
function ViewAllButton({ onClick }) {
  return <Button onClick={onClick}>View All</Button>;
}

export default ViewAllButton;
