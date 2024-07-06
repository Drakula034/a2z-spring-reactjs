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
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

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
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve cached data from React Query
  const { enabled = 0, disabled = 0 } =
    queryClient.getQueryData("enabledDisabledUserCount") || {};

  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get("page"), 10) || 1;

  const totalItemsCount = enabled + disabled;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  }, [page]);

  const { data, isError, isLoading } = useGetUsersByPage(currentPage);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (data) {
      setRowData(data);
    }
  }, [data]);

  useEffect(() => {
    navigate(`${location.pathname}?page=${currentPage}`, { replace: true });
  }, [currentPage, location.pathname, navigate]);

  const previousClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const buttonClick = (page) => {
    setCurrentPage(page);
  };

  const createNewUser = () => {};

  if (isLoading) {
    return <Spinner />;
  }
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
