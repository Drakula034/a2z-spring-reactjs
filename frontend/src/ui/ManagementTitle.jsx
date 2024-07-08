import styled from "styled-components";

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 5px;
  text-align: center;
`;
function ManagementTitle({ children }) {
  return <Title>{children}</Title>;
}

export default ManagementTitle;
