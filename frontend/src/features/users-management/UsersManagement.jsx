import styled from "styled-components";
import Table from "../../ui/Table";
import SearchButton from "../../ui/SearchButton";
import ClearButton from "../../ui/ClearButton";
import AddButton from "../../ui/AddButton";
import { useQuery } from "react-query";
import useGetUsersByPage from "./useGetUsersByPage";
import { useState } from "react";
import Pagination from "../../ui/Pagination";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 5px;
  text-align: center;
`;
const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-right: 2rem;
`;
const Search = styled.div`
  display: grid;
  grid-template-columns: max-content min-content min-content;
  column-gap: 8px;
`;
const Label = styled.label`
  font-size: 1.1rem;
  margin-left: 2rem;
`;
const Input = styled.input`
  height: 1.4rem;

  &::placeholder {
    transition: opacity 0.3s ease;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;
function UsersManagement() {
  const columns = ".5fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr";
  const columnName = [
    "User Id",
    "Photo",
    "Email",
    "First Name",
    "Last Name",
    "Roles",
    "Enabled",
    "temp",
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useGetUsersByPage(currentPage);

  const PreviousClick = () => {};
  const NextClick = () => {};
  // if (isLoading) alert("Loading...");
  // console.log(data);
  return (
    <Container>
      <Title>User&apos;s Management</Title>
      <StyledFeatures>
        <Search>
          <Label>
            Filter: <Input placeholder="Keyword" />
          </Label>

          <SearchButton />
          <ClearButton />
        </Search>
        <AddButton buttonText={"Create New user"} />
      </StyledFeatures>
      {/* <Table columnName={columnName} columns={columns} data={data} /> */}
      <Table />
      <Pagination />
    </Container>
  );
}

export default UsersManagement;
