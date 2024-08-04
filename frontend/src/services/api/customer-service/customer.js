import {
  CREATE_CUSTOMER,
  GET_CUSTOMER_FOR_MAIN_PAGE_BY_ID,
  CUSTOMER_LOGIN,
  CUSTOMER_INFO_PERSONAL,
} from "../../../constants/endpoint-constants";

export async function createNewCustomer(customerData) {
  const URL = CREATE_CUSTOMER;

  try {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "An error occurred");
    }
    const data = await res.json();
    // console.log("data: " + JSON.stringify(data));
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCustomerInfoForMainPage(customerId) {
  customerId = parseInt(customerId, 10);
  const URL = GET_CUSTOMER_FOR_MAIN_PAGE_BY_ID(customerId);

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Something went wrong");
    }

    const data = await res.json();
    // console.log("data in js", JSON.stringify(data));
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function loginCustomer(customerInfo) {
  const URL = CUSTOMER_LOGIN;

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerInfo),
    });

    if (!res.ok) {
      const errorResponse = await res.json(); // Parse error response
      throw new Error(errorResponse.message || "Invalid credentials");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCustomerInfo(customerId) {
  const URL = CUSTOMER_INFO_PERSONAL(customerId);
  try {
    const res = await fetch(URL, {
      method: "GET",
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "Error fetching customer info");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
