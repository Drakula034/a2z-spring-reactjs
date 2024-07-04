import styled from "styled-components";
import TableRow from "./TableRow";

const StyledTableBody = styled.div`
  display: grid;
  grid-template-rows: repeat(4, minmax(8rem, 1fr));

  background-color: #fff;

  &:nth-child(odd) {
    background-color: var(--color-grey-200);
  }
`;
function TableBody({ columns, data }) {
  if (!data || data.length === 0) {
    return (
      <StyledTableBody>
        <div>No data available</div>
      </StyledTableBody>
    );
  }
  return (
    <StyledTableBody>
      {data.map((rowInfo, ind) => (
        <TableRow columns={columns} key={ind} rowInfo={rowInfo} />
      ))}
    </StyledTableBody>
  );
}

export default TableBody;
