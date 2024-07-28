import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: 100px;
  text-decoration: none;
  background-color: black;
`;
function Footer() {
  return (
    <StyledFooter>
      {/* <NavLink to="/contact-us">Contact Us</NavLink>
      <NavLink to="/contact-us">About Us</NavLink> */}
    </StyledFooter>
  );
}

export default Footer;
