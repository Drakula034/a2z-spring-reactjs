import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { PiFolderSimpleUser } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
const Container = styled.div`
  /* background-color: #f8f9fa; Light background color */
  display: grid;
  grid-template-rows: 3rem auto;
  row-gap: 3rem;

  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); Subtle shadow */
`;

const Title = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  gap: 1rem; /* Space between icon and text */
  height: 5rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 8px; /* Rounded corners */
`;

const IconWrapper = styled.div`
  align-items: center;
  margin-left: 5px;
  /* margin-top: 1rem; */
`;

const TextWrapper = styled.div`
  h3 {
    margin: 0; /* Remove default margin */
    font-size: 0.8rem;
    color: #6c757d; /* Secondary text color */
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #212529; /* Primary text color */
  }
`;

const Details = styled.div`
  background-color: white;
  font-size: 1rem;
  /* Pointer cursor to indicate it's clickable */

  height: auto;
  border-radius: 8px; /* Rounded corners */
  border: 1px solid var(--color-grey-300);
  color: #6c757d;
  margin-bottom: 1rem;
  font-family: "Times New Roman", Times, serif;

  .my-orders {
    height: 2.4rem;
    padding: 5px;

    text-decoration: none;
    color: #6c757d;
    font-weight: bold;
    display: flex;
    direction: row;
    gap: 1rem;
    align-items: center;
    margin: 8px;
    /* position: relative; Ensure the pseudo-element is positioned relative to this element */
  }
  .border {
    border: 1px solid var(--color-grey-200);
  }

  .account-settings,
  .payments,
  .my-stuff,
  .logout {
    margin-top: 4px;
  }
  .account-settings-title,
  .payment-title,
  .logout-title {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 8px;
    align-items: center;

    svg {
      color: var(--color-blue-500);
    }
  }
  .information {
    margin-left: 3rem;
    margin-bottom: 8px;
    cursor: pointer;
    /* h4 {
      color: black;
      font-weight: lighter;
      font-size: 1rem;
    } */
  }
  .title {
    color: black;
    font-weight: lighter;
    font-size: 1rem;
  }
`;

function ProfileTitle() {
  const handleClick = () => {};
  return (
    <Container>
      <Title>
        <IconWrapper>
          <BsPersonCircle size={60} fill="var(--color-green-300)" />
        </IconWrapper>
        <TextWrapper>
          <h3>Hello,</h3>
          <h2>Abhishek</h2>
        </TextWrapper>
      </Title>
      <Details>
        <div>
          <div className="my-orders">
            <FaBox size={25} fill="var(--color-blue-500)" />
            <h3>MY ORDERS</h3>
          </div>
          <div className="border"></div>
        </div>
        <div>
          <div className="account-settings">
            <div className="account-settings-title">
              <IoPersonOutline size={25} />
              <h3>ACCOUNT SETTING</h3>
            </div>

            <div className="information">
              <h4 className="title" onClick={handleClick}>
                Profile Information
              </h4>
            </div>
            <div className="information" style={{ marginBottom: "18px" }}>
              <h4 className="title">Manage Address</h4>
            </div>
            {/* <div className="information">
              <h4 className="title">PAN Card Information</h4>
            </div> */}
            <div className="border"></div>
          </div>
        </div>
        <div>
          <div className="payments">
            <div className="payment-title">
              <MdOutlinePayment size={25} />
              <h3>PAYMENTS</h3>
            </div>
            <div className="information">
              <h4 className="title">Gift Cards</h4>
            </div>
            <div className="information">
              <h4 className="title">Saved UPI</h4>
            </div>
            <div className="information">
              <h4 className="title">Cards</h4>
            </div>
          </div>
          <div className="border"></div>
        </div>
        <div>
          <div className="my-stuff">
            {" "}
            <div className="payment-title">
              <PiFolderSimpleUser size={25} />
              <h3>MY STUFF</h3>
            </div>
            <div className="information">
              <h4 className="title">My Coupans</h4>
            </div>
            <div className="information">
              <h4 className="title">My Review & Ratings</h4>
            </div>
            <div className="information">
              <h4 className="title">All Notifications</h4>
            </div>
            <div className="information">
              <h4 className="title">Mt Wishlist</h4>
            </div>
          </div>
          <div className="border"></div>
        </div>
        <div>
          <div className="logout">
            <div className="logout-title">
              <IoMdLogOut />

              <h3 className="title" style={{ cursor: "pointer" }}>
                Log Out
              </h3>
            </div>
          </div>
        </div>
      </Details>
    </Container>
  );
}

export default ProfileTitle;
