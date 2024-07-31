import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 16rem;
  width: 30rem;
  border: 1px solid var(--color-grey-300);
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: auto; /* Center horizontally */
  position: absolute; /* Needed to center vertically */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center vertically and horizontally */

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

  .emailInput {
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
    color: var(--color-blue-400);
    font-weight: 200;

    span {
      font-weight: bold;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const PasswordInputContainer = styled.div`
  position: relative;
  width: 80%;
  margin-top: 1rem;

  .passwordInput {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 0.5rem; /* Adjust padding to leave space for the icon */
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    font-size: 1rem;
    outline: none;

    &:focus {
      border: 1px solid var(--color-blue-400);
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 0.75rem; /* Adjust position as needed */
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
function LogIn() {
  const navigate = useNavigate();
  const [logInInfo, setLogInInfo] = useState({ email: "", password: "" });
  const [checkPassword, setCheckPassword] = useState(false);

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
        <PasswordInputContainer>
          <input
            className="passwordInput"
            type={checkPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={inputChange}
            required
          />
          {checkPassword ? (
            <IoIosEyeOff
              className="icon"
              onClick={() => setCheckPassword(false)}
            />
          ) : (
            <IoEyeSharp
              className="icon"
              onClick={() => setCheckPassword(true)}
            />
          )}
        </PasswordInputContainer>
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
