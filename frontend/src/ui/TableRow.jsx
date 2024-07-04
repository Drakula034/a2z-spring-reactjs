import styled from "styled-components";
import { IoMdPerson } from "react-icons/io";
import { RiFileEditFill } from "react-icons/ri";

const StyledTableRow = styled.div`
  border: 1px solid var(--color-grey-300);
  font-size: 1rem;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
`;
function TableRow({ columns, rowInfo }) {
  // let len = columns.length;
  const { userId, email, enabled, firstName, lastName, photos, roles } =
    rowInfo;
  const roleNames =
    roles && Array.isArray(roles) ? roles.map((role) => role.name) : [];
  // Arrange data in the order of columns
  const columnsData = [
    userId,
    photos === null ? <IoMdPerson /> : photos,
    email,
    firstName,
    lastName,
    enabled === null ? false : enabled,
    roleNames.join(", "), // Join roles into a string if needed
  ];
  // console.log(columnsData);
  return (
    <StyledTableRow columns={columns}>
      {columnsData.map((column, index) => (
        <div key={index}>{column}</div>
      ))}
      <div>
        <RiFileEditFill />
      </div>
    </StyledTableRow>
  );
}

export default TableRow;
