import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const StyledTable = styled.div`
  display: grid;
  grid-template-rows: auto, 1fr;
`;
function Table({ columns, columnName }) {
  //   const columns = ".5fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr";
  //   const columnName = [
  //     "User Id",
  //     "Photo",
  //     "Email",
  //     "First Name",
  //     "Last Name",
  //     "Roles",
  //     "Enabled",
  //     "temp",
  //   ];
  return (
    <StyledTable>
      <TableHeader columns={columns}>
        {columnName.map((column, index) => (
          <div key={index}>{column}</div>
        ))}
      </TableHeader>
      <TableBody />
    </StyledTable>
  );
}

export default Table;
