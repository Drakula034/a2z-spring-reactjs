import styled from "styled-components";

const StyledHeader = styled.div`
  border: 1px solid var(--color-grey-300);
  font-size: 1rem;
  font-weight: bold;
  background-color: var(--color-grey-600);
  color: wheat;
  padding: 3px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  justify-items: center;
  align-items: center;
  text-transform: uppercase;
`;
function TableHeader({ children, columns }) {
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}

export default TableHeader;
