import styled from "styled-components";
import Table from "../../ui/Table";
import SearchButton from "../../ui/SearchButton";
import ClearButton from "../../ui/ClearButton";
import AddButton from "../../ui/AddButton";
import { useQuery, useQueryClient } from "react-query";
import useGetUsersByPage from "./useGetUsersByPage";
import { useEffect, useState } from "react";
import Pagination from "../../ui/Pagination";
import { useEnabledDisabledUser } from "../control-panel/useEnabledDisabledUser";

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

  const queryClient = useQueryClient();

  // Retrieve cached data from React Query
  const { enabled, disabled } = queryClient.getQueryData(
    "enabledDisabledUserCount"
  );
  // const { usersData } = useEnabledDisabledUser();
  // let enabled = data?.enabled;
  // let disabled = data?.disabled;
  // enabled = isNaN(enabled) === true ? 0 : Number(enabled);
  // disabled = isNaN(disabled) === true ? 0 : Number(disabled);
  // console.log(enabled + disabled);

  const totalItemsCount = enabled + disabled;
  const itemsPerPage = 4;

  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useGetUsersByPage(currentPage);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (data) {
      setRowData(data);
    }
  }, [data]);

  const previousClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    else {
      setCurrentPage(1);
    }
  };
  const nextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    else {
      setCurrentPage(totalPages);
    }
  };
  const buttonClick = (page) => {
    setCurrentPage(page);
  };
  // console.log(currentPage);
  // // if (isLoading) alert("Loading...");
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
      <Table rowData={rowData} />
      <Pagination
        setCurrentPage={setCurrentPage}
        previousClick={previousClick}
        nextClick={nextClick}
        totalPages={totalPages}
        buttonClick={buttonClick}
      />
    </Container>
  );
}

export default UsersManagement;
