import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledFormHeader = styled.div``;
const Nav = styled.nav`
  height: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  background-color: var(--color-grey-400);
`;

const NavItem = styled(NavLink)`
  color: var(--text-color);
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    //text-decoration: underline;
    border: 2px solid white;
    color: white;
    cursor: pointer;
  }
`;
function ProductFormHeader() {
  const location = useLocation();
  const navCategories = [
    { name: "Overview", path: "overview" },
    { name: "Description", path: "description" },
    { name: "Images", path: "image" },
    { name: "Details", path: "details" },
    { name: "Shipping", path: "shipping" },
  ];
  return (
    <Nav>
      {navCategories.map((category) => (
        <NavItem to={`${category.path}`} key={category.name}>
          {category.name}
        </NavItem>
      ))}
    </Nav>
  );
}

export default ProductFormHeader;
