import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import useCreateCustomer from "../pages/customer/useCreateCustomer";
import useGetCustomerInfoByCustomerId from "../pages/customer/useGetCustomerInfoByCustomerId";
import { useDispatch } from "react-redux";
import { setCurrentCustomer } from "../redux/customers/customerSlice";

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

  .icon {
    position: absolute;
    top: 50%;
    right: 0.75rem; /* Adjust position as needed */
    transform: translateY(-50%);
    cursor: pointer;
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
  &:disabled {
    background-color: var(--color-grey-300);
    cursor: not-allowed;
  }
`;

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newCustomerId, setNewCustomerId] = useState(() => {
    try {
      const storedCustomerInfo = sessionStorage.getItem("customerInfo");

      // If there's no stored info, return null
      if (!storedCustomerInfo) return null;

      const customerInfo = JSON.parse(storedCustomerInfo);

      // Check if customerInfo has the customerId
      if (customerInfo && customerInfo.customerId) {
        return customerInfo.customerId;
      }

      // If customerId is not found, return null
      return null;
    } catch (error) {
      console.error("Error parsing customer info from sessionStorage:", error);
      // Return null in case of any error
      return null;
    }
  });

  const { createNewCustomer } = useCreateCustomer();
  const { data: customerInfo, isLoading: isCustomerInfoLoading } =
    useGetCustomerInfoByCustomerId(newCustomerId);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);

  const onSubmit = async (data) => {
    const customerData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      secondPassword: data.confirmPassword,
    };
    console.log("preparedData", customerData);
    try {
      const customerId = await createNewCustomer(customerData);
      console.log("create customerId", customerId);
      if (customerId) {
        setNewCustomerId(customerId);
      }
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  useEffect(() => {
    if (customerInfo) {
      dispatch(setCurrentCustomer(customerInfo));
      sessionStorage.setItem("customerInfo", JSON.stringify(customerInfo));
      console.log("customerInfo", customerInfo);
      // Navigate or perform other actions as needed
    }
  }, [customerInfo, dispatch]);
  // console.log("customerInfo", customerInfo);
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
            type={checkPassword ? "text" : "password"}
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
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
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
          <label>Confirm Password</label>
        </InputContainer>
        <Button type="submit" disabled={password !== confirmedPassword}>
          Sign Up
        </Button>
      </Form>
      <h5>
        Already have an account?{" "}
        <span onClick={() => navigate("/account/login?ret/")}>Login</span>
      </h5>
    </FormContainer>
  );
}

export default SignUp;
