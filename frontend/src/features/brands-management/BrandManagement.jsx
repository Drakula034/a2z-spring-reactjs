import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAdd from "../../ui/ManagementSearchAndAdd";
import BrandTable from "../../ui/BrandTable";
import { useEffect, useState } from "react";
import useGetBrandByPage from "./useGetBrandByPage";
import Pagination from "../../ui/Pagination";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBrandCount } from "../../services/api/product-service/brands";
import useBrandsCount from "../control-panel/useBrandsCount";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;
function BrandManagement() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get("page"), 10) || 1;

  const [currentPage, setCurrentPage] = useState(page);
  const [brands, setBrands] = useState([]);

  const { data: brandsData, isLoading: brandsLoading } =
    useGetBrandByPage(currentPage);

  const { data, isLoading: brandsCountLoading } = useQuery(
    "brandsCount",
    useBrandsCount()
  );

  // console.log(data);
  const totalBrandCount = data?.totalBrandCount || 0;
  // console.log(totalBrandCount);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalBrandCount / itemsPerPage);
  useEffect(() => {
    // const data = useGetBrandByPage(currentPage);
    setBrands(brandsData);
  }, [brandsData]);

  useEffect(() => {
    navigate(`${location.pathname}?page=${currentPage}`, { replace: true });
  }, [currentPage, location.pathname, navigate]);
  const createNewBrand = () => {
    navigate(`${location.pathname}/create`, { replace: true });
  };
  const nextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const previousClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const buttonClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <Container>
      <ManagementTitle>Categories Management</ManagementTitle>
      <ManagementSearchAndAdd
        buttonText={"Add Brand"}
        createNew={createNewBrand}
      />
      <BrandTable rowData={brands} />
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        nextClick={nextClick}
        previousClick={previousClick}
        buttonClick={buttonClick}
      />
    </Container>
  );
}

export default BrandManagement;
