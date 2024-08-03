import styled from "styled-components";
import MainHeader from "../../../ui/customer-page/MainHeader";
import ProfileTitle from "./ProfileTitle";
import ProfileInformation from "./ProfileInformation";

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
  return (
    <Container>
      <MainHeader />
      <div className="grid-container">
        <ProfileTitle />
        <ProfileInformation />
      </div>
    </Container>
  );
}

export default AccountProfile;
