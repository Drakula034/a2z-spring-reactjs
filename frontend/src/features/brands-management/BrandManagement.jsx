import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAdd from "../../ui/ManagementSearchAndAdd";
import BrandTable from "../../ui/BrandTable";
import { useEffect, useState } from "react";
import useGetBrandByPage from "./useGetBrandByPage";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;
function BrandManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [brands, setBrands] = useState([]);

  const { data: brandsData, isLoading: brandsLoading } =
    useGetBrandByPage(currentPage);

  console.log(brandsData);

  useEffect(() => {
    // const data = useGetBrandByPage(currentPage);
    setBrands(brandsData);
  }, [brandsData]);
  const createNewBrand = () => {};
  return (
    <Container>
      <ManagementTitle>Categories Management</ManagementTitle>
      <ManagementSearchAndAdd
        buttonText={"Add Brand"}
        createNew={createNewBrand}
      />
      <BrandTable rowData={brandsData} />
    </Container>
  );
}

export default BrandManagement;
