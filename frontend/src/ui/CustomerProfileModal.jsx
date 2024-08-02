import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";
import { IoLogOutOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "../redux/customers/customerSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: auto;
  width: 9rem;
  border: 1px solid var(--color-grey-400);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  gap: 4px; /* Increase gap between items for better spacing */
  padding: 4px; /* Add padding for better spacing within the container */
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 6px; /* Space between icon and text */
  font-size: 1rem;
  color: var(--color-grey-700);
  cursor: pointer;
  width: 100%; /* Full width to ensure text and icon are aligned properly */
  padding: 3px; /* Add padding for better click area */
  box-sizing: border-box; /* Include padding in element's total width and height */

  &:hover {
    color: var(--color-blue-400);
  }

  /* Optional: Add text alignment for better centering */
  text-align: center;
`;

function CustomerProfileModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogOutClick = () => {
    // sessionStorage.removeItem("customerInfo");
    dispatch(logout());
    navigate("/");
  };
  return (
    <Container>
      <Item>
        <RxAvatar size={24} /> {/* Increase icon size for better visibility */}
        My Profile
      </Item>
      <Item>
        <FaBoxOpen size={24} />
        Orders
      </Item>
      <Item>
        <IoMdNotificationsOutline size={24} />
        Notifications
      </Item>
      <Item onClick={() => onLogOutClick()}>
        <IoLogOutOutline size={24} />
        Logout
      </Item>
    </Container>
  );
}

export default CustomerProfileModal;
