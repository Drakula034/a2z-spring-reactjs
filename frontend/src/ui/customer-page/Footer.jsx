import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: auto;
  text-decoration: none;
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
