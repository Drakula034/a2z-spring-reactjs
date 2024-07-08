import styled from "styled-components";
import ManagementTitle from "../../ui/ManagementTitle";
import ManagementSearchAndAdd from "../../ui/ManagementSearchAndAdd";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
`;
function CategoryManagement() {
  const createNewCategory = () => {};
  return (
    <Container>
      <ManagementTitle>Categories Management</ManagementTitle>
      <ManagementSearchAndAdd
        buttonText={"Add Category"}
        createNew={createNewCategory}
      />
    </Container>
  );
}

export default CategoryManagement;
