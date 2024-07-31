import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25rem;
  width: 30rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 4px;
  margin: 5rem auto;

  h2 {
    margin-top: 1rem;
  }

  h5 {
    margin-bottom: 1rem;
    color: var(--color-blue-300);
    span {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--color-grey-300);
    outline: none;
    font-size: 1rem;

    &:focus {
      border: 1px solid var(--color-blue-400);
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-1.5rem);
      font-size: 0.75rem;
      color: var(--color-blue-400);
    }
  }

  label {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s;
    background-color: #fff;
    padding: 0 0.2rem;
    font-size: 1rem;
    color: var(--color-grey-600);
    pointer-events: none;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0 0 0.25rem 0;
  width: 100%;
  text-align: left;
  padding-left: 0.5rem;
`;

const Button = styled.button`
  width: 100%;
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
`;

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
    // reset();
  };

  return (
    <FormContainer>
      <h2>Create an account</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputContainer>
            {/* {errors.firstName && (
              <ErrorMessage>First Name is required</ErrorMessage>
            )} */}
            <input
              {...register("firstName", { required: true })}
              type="text"
              placeholder=" "
            />
            <label>First Name</label>
          </InputContainer>
          <InputContainer>
            {/* {errors.lastName && (
              <ErrorMessage>Last Name is required</ErrorMessage>
            )} */}
            <input {...register("lastName")} type="text" placeholder=" " />
            <label>Last Name</label>
          </InputContainer>
        </div>
        <InputContainer>
          {/* {errors.email && <ErrorMessage>Email is required</ErrorMessage>} */}
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder=" "
          />
          <label>Email</label>
        </InputContainer>
        <InputContainer>
          {/* {errors.password && <ErrorMessage>Password is required</ErrorMessage>} */}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </InputContainer>
        <InputContainer>
          {/* {errors.confirmPassword && (
            <ErrorMessage>Confirm Password is required</ErrorMessage>
          )} */}
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder=" "
            disabled={password.length === 0}
          />
          <label>Confirm Password</label>
        </InputContainer>
        <Button type="submit">Sign Up</Button>
      </Form>
      <h5>
        Already have an account?{" "}
        <span onClick={() => navigate("/account/login?ret/")}>Login</span>
      </h5>
    </FormContainer>
  );
}

export default SignUp;