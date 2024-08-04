import styled from "styled-components";
import MainHeader from "../../../ui/customer-page/MainHeader";
import ProfileTitle from "./ProfileTitle";
import ProfileInformation from "./ProfileInformation";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import useGetCustomerInfoByCustomerId from "../useGetCustomerInfoByCustomerId";
import { useSelector } from "react-redux";
import { selectCurrentCustomer } from "../../../redux/customers/selectors";
import useGetCustomerPersonalInfo from "../useGetCustomerPersonalInfo";
import AddressInformation from "./AddressInformation";

const Container = styled.div`
  margin: 4rem 6rem 0 6rem;

  .grid-container {
    display: grid;
    grid-template-columns: 1.2fr 4fr;
    gap: 1rem; /* Use gap to define the space between columns */
    margin-bottom: 2rem;
  }
`;

function AccountProfile() {
  const location = useLocation();
  // const selector = useSelector();
  const customerId = useSelector(selectCurrentCustomer).customerId;
  // const queryParams = new URLSearchParams(location.search);
  const { data: customerPersonalInfo } = useGetCustomerPersonalInfo(customerId);
  // console.log("customerPersonalInfo :", customerPersonalInfo);
  return (
    <Container>
      {/* <MainHeader /> */}
      <div className="grid-container">
        <ProfileTitle customerName={customerPersonalInfo?.firstName} />
        <Routes>
          <Route
            index
            element={
              <ProfileInformation customerPersonalInfo={customerPersonalInfo} />
            }
          />
          <Route
            path="profile"
            element={
              <ProfileInformation customerPersonalInfo={customerPersonalInfo} />
            }
          />
          <Route path="address" element={<AddressInformation />} />
          <Route path="*" element={<Navigate to="/account/profile" />} />
        </Routes>
      </div>
    </Container>
  );
}

export default AccountProfile;
