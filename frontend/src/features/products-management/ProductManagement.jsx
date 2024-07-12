import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAddProducts from "../../ui/ManagementSearchAndAddProducts";
import ProductTable from "../../ui/ProductTable";
import Pagination from "../../ui/Pagination";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetProductsByPage from "./useGetProductsByPage";
import useProductsEnabledDisabledCount from "../control-panel/useProductsEnabledDisabledCount";
import Spinner from "../../ui/Spinner";
import useGetCategoryAll from "../brands-management/useGetAllCategory";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;

function ProductManagement() {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page");
  const [currentPage, setCurrentPage] = useState(page);
  const [products, setProducts] = useState([]);
  const { data: categoryData, isLoading: categoryLoading } =
    useGetCategoryAll();

  const { data: productEnabledDisabled = { enabled: 0, disabled: 0 } } =
    useProductsEnabledDisabledCount();

  const { enabled: enabledProducts, disabled: disabledProducts } =
    productEnabledDisabled;
  // console.log(enabledProducts, disabledProducts);
  const totalProducts = enabledProducts + disabledProducts;
  const productsPerPage = 4;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const { data: productsData, isLoading: productsLoading } =
    useGetProductsByPage(currentPage);

  // console.log(productsData);
  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);
  const previousClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const buttonClick = (page) => {
    setCurrentPage(page);
  };
  if (productsLoading) return <Spinner />;
  return (
    <Container>
      <ManagementTitle>{"Products Management"}</ManagementTitle>

      <ManagementSearchAndAddProducts
        buttonText={"Add Product"}
        categoryData={categoryData}
      />
      <ProductTable rowData={products} />
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        previousClick={previousClick}
        nextClick={nextClick}
        buttonClick={buttonClick}
      />
    </Container>
  );
}

export default ProductManagement;
