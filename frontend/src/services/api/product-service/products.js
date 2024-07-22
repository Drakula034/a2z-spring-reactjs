import {
  CREATE_PRODUCT_OVERVIEW,
  GET_PRODUCT_BY_PAGE,
  GET_PRODUCT_OVERVIEW_BY_ID,
  PRODUCT_SERVICE_ENABLED_DISABLED_URL,
  PRODUCTS_TOGGLE_ENABLED_STATUS,
  UPDATE_PRODUCT_OVERVIEW,
} from "../../../constants/endpoint-constants";

export async function getEnabledDisabledProductCount() {
  const URL = PRODUCT_SERVICE_ENABLED_DISABLED_URL;

  try {
    const response = await fetch(URL, { mode: "cors", method: "GET" });
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getProductsByPage(page) {
  const URL = GET_PRODUCT_BY_PAGE(page);
  try {
    const response = await fetch(URL, { mode: "cors", method: "GET" });
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function toggleProductEnabledStatus(productId) {
  const URL = PRODUCTS_TOGGLE_ENABLED_STATUS(productId);

  try {
    const response = await fetch(URL, { mode: "cors", method: "PUT" });
    if (!response.ok) throw new Error(response.message);

    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function addProductOverView(data) {
  const URL = CREATE_PRODUCT_OVERVIEW;

  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error(response.message);

    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getOverViewDataByProductId(productId) {
  const URL = GET_PRODUCT_OVERVIEW_BY_ID(productId);

  try {
    const res = await fetch(URL, { method: "GET" });
    if (!res.ok) throw new Error(res.message);

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateProductOverView(data, productId) {
  productId = parseInt(productId, 10);
  // console.log("API call - Product ID:", productId);
  // console.log("API call - data:", data);
  const URL = UPDATE_PRODUCT_OVERVIEW(productId);
  try {
    // console.log(JSON.stringify(data));
    const res = await fetch(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      // Get the error message from the response body if available
      const errorText = await res.text(); // or res.json() if the error response is JSON
      throw new Error(errorText || "Something went wrong");
    }

    return { success: true };
  } catch (err) {
    // Optionally log the error or perform additional error handling
    console.error("Update failed:", err);
    return { success: false, error: err.message };
  }
}
