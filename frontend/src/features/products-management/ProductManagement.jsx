import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAddProducts from "../../ui/ManagementSearchAndAddProducts";
import ProductTable from "../../ui/ProductTable";

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
    </Container>
  );
}

export default ProductManagement;
