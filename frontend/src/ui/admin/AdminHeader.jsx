import { React } from "react";
import styled from "styled-components";
import logoIcon from "/assets/a2z-transparent.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// Make sure to have a logo icon image in your project

const Header = styled.header`
  background-color: var(--color-grey-800);
  //height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 4px 4px 0 0;
  justify-content: space-around;
  color: var(--color-grey-400);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  padding: 4px;
  background-color: white;
`;

const LogoIcon = styled.img`
  height: 2.5rem;
  margin-right: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const LogoText = styled.span`
  //color: var(--text-color);
  font-size: 1.8rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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

const headerCategories = [
  { name: "Users", path: "users" },
  { name: "Categories", path: "categories" },
  { name: "Brands", path: "brands" },
  { name: "Products", path: "products" },
  { name: "Customers", path: "customers" },
  { name: "Shipping", path: "shipping" },
  { name: "Orders", path: "orders" },
  { name: "Reports", path: "reports" },
  { name: "Articles", path: "articles" },
  { name: "Menus", path: "menus" },
  { name: "Settings", path: "settings" },
  { name: "User", path: "user" },
];

// List of items that should have a drop-down icon
const itemsWithDropIcon = [
  "Users",
  "Brands",
  "Products",
  "Reports",
  "Settings",
  "User",
  "Categories",
];

function AdminHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const onCategoryClick = (path) => {
    const basePath = "/admin";
    const url = `${basePath}/${path}`;
    navigate(url);
  };
  return (
    <Header>
      <LogoContainer onClick={() => navigate("/admin")}>
        <LogoIcon src={logoIcon} alt="A2Z" />
        {/*<LogoText>A2Z</LogoText>*/}
      </LogoContainer>
      <Nav>
        {headerCategories.map((category, index) => (
          // <NavItem key={index} onClick={() => onCategoryClick(category.path)}> with div
          <NavItem
            key={index}
            to={`/admin/${category.path}`}
            // activeClassName="active"
          >
            {category.name}
            {itemsWithDropIcon.includes(category.name) && (
              <MdOutlineArrowDropDown />
            )}
          </NavItem>
        ))}
      </Nav>
    </Header>
  );
}

export default AdminHeader;
