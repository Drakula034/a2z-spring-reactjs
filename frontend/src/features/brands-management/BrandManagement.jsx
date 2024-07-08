import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAdd from "../../ui/ManagementSearchAndAdd";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;
function BrandManagement() {
  const createNewBrand = () => {};
  return (
    <Container>
      <ManagementTitle>Categories Management</ManagementTitle>
      <ManagementSearchAndAdd
        buttonText={"Add Brand"}
        createNew={createNewBrand}
      />
    </Container>
  );
}

export default BrandManagement;
