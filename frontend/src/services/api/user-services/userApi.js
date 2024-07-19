import { json } from "react-router-dom";

import {
  ALL_USER_INFO,
  CREATE_USER,
  DELETE_USER_BY_ID,
  GET_USERS_BY_PAGE,
  USER_BY_ID,
  USER_CONTROL_ENABLED_INFO,
  USERS_ENABLED_DISABLED_STATUS,
} from "../../../constants/endpoint-constants";

export async function getUserInfo() {
  const url = ALL_USER_INFO;

  try {
    const res = await fetch(url, { mode: "cors", method: "GET" });
    if (!res.ok) {
      return "Having some error";
    }
    const data = await res.json();
    const user = JSON.stringify(data);
    return user;
    // console.log("user: " + user);
  } catch (err) {
    console.error(err);
  }
}

export async function getEnabledDisabledUsers() {
  const url = USER_CONTROL_ENABLED_INFO;

  try {
    const response = await fetch(url, { mode: "cors", method: "GET" });
    if (!response.ok) {
      return "Unable to get enabled and disabled user info";
    }

    const data = await response.json();
    return data;
    // return JSON.stringify(data);
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getUsersByPage(page) {
  const url = GET_USERS_BY_PAGE(page);
  // console.log(`fetching data from ${page}`);

  try {
    const response = await fetch(url, { mode: "cors", method: "GET" });
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getUserById(userId) {
  const url = USER_BY_ID(userId);

  try {
    const response = await fetch(url, { mode: "cors", method: "GET" });
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function editUserEnabledStatus(userId) {
  const url = USERS_ENABLED_DISABLED_STATUS(userId);

  try {
    const response = await fetch(url, {
      // mode: "no-cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error(response.message);
    // const data = await response.json();
    // return data;
    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteUserById(userId) {
  const url = DELETE_USER_BY_ID(userId);

  try {
    const response = await fetch(url, { method: "DELETE" });
    if (!response.ok) throw new Error(response.message);
    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function createUser(data) {
  const URL = CREATE_USER;
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON content type
      },
      body: JSON.stringify(data), // Convert data object to JSON string
    });
    if (!response.ok) throw new Error(response.message);
    // console.log(data);
    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}
