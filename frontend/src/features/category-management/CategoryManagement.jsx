import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAdd from "../../ui/ManagementSearchAndAdd";
import CategoryTable from "../../ui/CategoryTable";
import { useQuery } from "react-query";
import useGetCategoryByPage from "./useGetCategoryByPage";
import { useEffect, useState } from "react";
import Pagination from "../../ui/Pagination";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;
function CategoryManagement() {
  const { data: category } = useGetCategoryByPage(1);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    setCategoryData(category);
  }, category);
  console.log(category);
  const createNewCategory = () => {};
  return (
    <Container>
      <ManagementTitle>Categories Management</ManagementTitle>
      <ManagementSearchAndAdd
        buttonText={"Add Category"}
        createNew={createNewCategory}
      />
      <CategoryTable rowData={categoryData} />
      <Pagination />
    </Container>
  );
}

export default CategoryManagement;
