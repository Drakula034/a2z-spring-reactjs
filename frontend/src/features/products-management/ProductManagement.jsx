import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAddProducts from "../../ui/ManagementSearchAndAddProducts";
import ProductTable from "../../ui/ProductTable";
import Pagination from "../../ui/Pagination";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;

function ProductManagement() {
  return (
    <Container>
      <ManagementTitle>{"Products Management"}</ManagementTitle>

      <ManagementSearchAndAddProducts buttonText={"Add Product"} />
      <ProductTable />
      <Pagination />
    </Container>
  );
}

export default ProductManagement;
