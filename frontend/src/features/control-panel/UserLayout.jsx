import styled from "styled-components";
import AddButton from "../../ui/AddButton";
import ViewAllButton from "../../ui/ViewAllButton";
import { Container, Data, Disabled, Enabled, Head } from "./LayoutStyles";
import { useNavigate } from "react-router-dom";

// const Container = styled.div`
//   display: grid;
//   /* z-index: 1; */
//   grid-template-rows: auto 1fr;
//   justify-items: center;
//   width: 100%;
//   row-gap: 1rem;
// `;
// const Head = styled.div`
//   background-color: grey;
//   font-weight: bold;
//   color: black;
//   height: 25px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   padding: 0 1rem;
// `;

// const Data = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

// const EnabledDiv = styled.div`
//   color: green;
//   font-weight: bold;
// `;
// const DisabledDiv = styled.div`
//   color: var(--color-grey-400);
//   font-weight: bold;
// `;
function UserLayout({ enabled, disabled, moveToUsersPage }) {
  const navigate = useNavigate();
  enabled = isNaN(enabled) === true ? 0 : Number(enabled);
  disabled = isNaN(disabled) === true ? 0 : Number(disabled);

  const createNewUser = () => {
    navigate(`${location.pathname}/users/create`, {
      state: { from: "/admin" },
    });
  };
  // console.log("user layout navigating");
  return (
    <Container>
      <Head>User: {enabled + disabled}</Head>
      <Data>
        <Enabled>Enabled: {enabled}</Enabled>
        <Disabled>Disabled: {disabled}</Disabled>
        <AddButton buttonText="Add User" createNew={createNewUser} />
        <ViewAllButton onClick={moveToUsersPage} />
      </Data>
    </Container>
  );
}

export default UserLayout;
