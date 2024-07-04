import styled from "styled-components";

const PaginationContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  /* gap: 10px; Adjust the gap between items */
  justify-content: center; /* Horizontally center items */
  align-items: center; /* Vertically center items */
  width: max-content;
  margin: 2rem auto; /* Center the container horizontally */
`;

const PaginationItem = styled.div`
  border: 1px solid black;
  padding: 5px;
  background-color: var(--color-grey-100);
  color: var(--color-blue-400);
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--color-blue-500);
    color: var(--color-grey-200);
  }
`;

function Pagination() {
  const totalItemsCount = 40;
  const itemsPerPage = 4;
  let pageNumbers = [];
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);
  for (let i = 0; i < totalPages; i++) {
    pageNumbers[i] = i + 1;
  }
  return (
    <PaginationContainer>
      <PaginationItem
        style={{ color: "var(--color-grey-400)", backgroundColor: "white" }}
      >
        Previous
      </PaginationItem>
      {pageNumbers.map((page, ind) => (
        <PaginationItem key={ind}>{page}</PaginationItem>
      ))}
      <PaginationItem
        style={{ color: "var(--color-grey-400)", backgroundColor: "white" }}
      >
        Next
      </PaginationItem>
    </PaginationContainer>
  );
}

export default Pagination;
