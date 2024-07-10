import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAdd from "../../ui/ManagementSearchAndAdd";
import CategoryTable from "../../ui/CategoryTable";
import { useQuery } from "react-query";
import useGetCategoryByPage from "./useGetCategoryByPage";
import { useEffect, useState } from "react";
import Pagination from "../../ui/Pagination";
import { useEnabledDisabledUser } from "../control-panel/useEnabledDisabledUser";
import useCategoryEnabledDisabled from "../control-panel/useCategoryEnabledDisabled";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;
function CategoryManagement() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get("page"), 10) || 1;
  const [categoryData, setCategoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);

  const {
    data: categoryEnabledDisabledData = {
      enabled: 0,
      disabled: 0,
    },
    isLoading: isCategoryCountLoading,
  } = useQuery("enabledDisabledCategory", useCategoryEnabledDisabled());

  const { enabled = 0, disabled = 0 } = categoryEnabledDisabledData;
  const totalCategoryCount = enabled + disabled;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(totalCategoryCount / itemsPerPage);

  useEffect(() => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  }, [page]);

  const { data: category } = useGetCategoryByPage(currentPage);

  useEffect(() => {
    if (category) setCategoryData(category);
  }, [category]);
  // console.log(category);
  useEffect(() => {
    navigate(`${location.pathname}?page=${currentPage}`, { replace: true });
  }, [currentPage, location.pathname, navigate]);

  const createNewCategory = () => {
    navigate(`${location.pathname}/create`);
    // navigate("admin/categories/create");
    // console.log(`${location.pathname}/create`);
  };

  const buttonClick = (page) => {
    setCurrentPage(page);
  };
  console.log(currentPage);
  const previousClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <ManagementTitle>Categories Management</ManagementTitle>
      <ManagementSearchAndAdd
        buttonText={"Add Category"}
        createNew={createNewCategory}
      />
      <CategoryTable rowData={categoryData} />
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        buttonClick={buttonClick}
        previousClick={previousClick}
        nextClick={nextClick}
      />
    </Container>
  );
}

export default CategoryManagement;
