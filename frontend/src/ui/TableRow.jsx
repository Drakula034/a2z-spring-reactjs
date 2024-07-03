import styled from "styled-components";

const StyledTableRow = styled.div`
  border: 1px solid var(--color-grey-300);
  font-size: 1rem;
  grid-template-columns: ${(props) => props.columns};
`;
function TableRow({ columns }) {
  return <StyledTableRow>Hello</StyledTableRow>;
}

export default TableRow;
