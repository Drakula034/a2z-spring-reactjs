import styled from "styled-components";
import UsersTable from "../../ui/UsersTable";
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
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAdd from "../../ui/ManagementSearchAndAdd";
import useToggleUserStatus from "./useToggleUserStatus";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;

function UsersManagement() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    data: userData = { enabled: 0, disabled: 0 },
    isLoading: usersCountLoading,
  } = useQuery("enabledDisabledUserCount", useEnabledDisabledUser());
  const { enabled = 0, disabled = 0 } = userData;

  const { togglingUserStatus } = useToggleUserStatus();

  const handleUserStatusToggle = (userId) => {
    togglingUserStatus(userId);
  };

  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get("page"), 10) || 1;
  // console.log("enabled: " + enabled + " disabled: " + disabled);
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

  const createNewUser = () => {
    navigate(`${location.pathname}/create`);
  };

  if (usersCountLoading) {
    return <Spinner />;
  }
  return (
    <Container>
      {/* <Title>User&apos;s Management</Title> */}
      <ManagementTitle>User&apos;s Management</ManagementTitle>

      <ManagementSearchAndAdd
        createNew={createNewUser}
        buttonText={"Create New user"}
      />
      <UsersTable
        rowData={rowData}
        // onUserStatusToggle={handleUserStatusToggle}
      />
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
