import {
  CREATE_ADDRESS,
  GET_ALL_ADDRESS_OF_CUSTOMER,
} from "../../../constants/endpoint-constants";

export async function addAddress(addressInfo) {
  const URL = CREATE_ADDRESS;

  try {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(addressInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "An error occurred");
    }
    const data = await res.json(); // Use res.json() to parse the response body

    return data;
  } catch (err) {
    throw new Error(err.message); // You can just throw err.message directly
  }
}

export async function getAllAddressOfCustomer(customerId) {
  customerId = parseInt(customerId, 10);
  const URL = GET_ALL_ADDRESS_OF_CUSTOMER(customerId);

  try {
    const res = await fetch(URL, {
      method: "GET",
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "An error occurred");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
