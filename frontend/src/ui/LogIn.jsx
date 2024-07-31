import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 16rem;
  width: 30rem;
  border: 1px solid var(--color-grey-300);
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: auto; /* Center horizontally and vertically */
  position: absolute; /* Needed to center vertically */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h2 {
    margin-top: 5px;
    text-align: center;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .emailInput,
  .passwordInput {
    width: 80%;
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 4px;
    border: 1px solid var(--color-grey-300);
    outline: none;
    font-size: 1rem;

    &:focus {
      border: 1px solid var(--color-blue-400);
    }
  }

  button {
    width: 80%;
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 4px;
    border: none;
    background-color: var(--color-blue-400);
    color: white;
    cursor: pointer;

    &:hover {
      background-color: var(--color-blue-500);
    }

    &:disabled {
      background-color: var(--color-grey-300);
      cursor: not-allowed;
    }
  }

  h5 {
    margin-top: 1rem;
    cursor: pointer;
    color: var(--color-blue-400);
    font-weight: 200;

    span {
      font-weight: bold;
    }
  }
`;

function LogIn() {
  const navigate = useNavigate();
  const [logInInfo, setLogInInfo] = useState({ email: "", password: "" });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setLogInInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Container>
      <h2>Login</h2>
      <div className="inputContainer">
        <input
          className="emailInput"
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={inputChange}
          required
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
          name="password"
          onChange={inputChange}
          required
        />
        <button
          type="submit"
          disabled={logInInfo.email === "" || logInInfo.password === ""}
          onClick={() => {
            console.log(logInInfo);
          }}
        >
          Continue
        </button>
        <h5>
          New Here?{" "}
          <span onClick={() => navigate("/account/login?signup=true")}>
            Create an account
          </span>
        </h5>
      </div>
    </Container>
  );
}

export default LogIn;
