import styled from "styled-components";
import TableRow from "./TableRow";

const StyledTableBody = styled.div`
  display: grid;

  background-color: #fff;

  &:nth-child(odd) {
    background-color: var(--color-grey-200);
  }
`;
function TableBody({ columns }) {
  return (
    <StyledTableBody>
      <TableRow columns={columns} />
    </StyledTableBody>
  );
}

export default TableBody;
