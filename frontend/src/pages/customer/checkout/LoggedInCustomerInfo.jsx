import styled from "styled-components";
import { TiTickOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";

const Container = styled.div`
  height: auto;
  padding: 0.5rem; /* Add padding inside the container */
  border: 1px solid var(--color-grey-400);
  border-radius: 5px; /* Add rounded corners */
  margin-bottom: 16px;

  .block-info {
    display: flex;
    justify-content: space-between; /* Space out the content */
    align-items: center; /* Center items vertically */
  }

  .info {
    display: flex;
    flex-direction: column; /* Stack the login and name vertically */
  }

  .login {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: var(--color-grey-400); /* Primary color for the login text */
    margin-bottom: 0.25rem; /* Space between login and name */

    svg {
      margin-left: 0.5rem; /* Space between the text and the icon */
      color: var(--color-blue-400); /* Color for the icon */
      font-size: 1.5rem; /* Size of the icon */
      fill: var(--color-blue-400);
    }
  }

  .name {
    font-size: 0.875rem; /* Slightly smaller font size */
    color: var(--color-grey-700); /* Grey color for the name */
    span {
      color: black;
      font-weight: bold;
    }
  }

  .change-btn button {
    padding: 0.5rem 0.5rem;
    background-color: var(--color-blue-500);
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 1rem; /* Smaller font size */
  }
`;

function LoggedInCustomerInfo() {
  return (
    <Container>
      <div className="block-info">
        <div className="info">
          <div className="login">
            Login <TiTick />
          </div>
          <div className="name">
            <span>Abhishek</span> 12312345
          </div>
        </div>
        <div className="change-btn">
          <button>Change</button>
        </div>
      </div>
    </Container>
  );
}

export default LoggedInCustomerInfo;
