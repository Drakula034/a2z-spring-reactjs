import {
  CREATE_PRODUCT_OVERVIEW,
  GET_PRODUCT_BY_PAGE,
  GET_PRODUCT_DESCRIPTION,
  GET_PRODUCT_IMAGES,
  GET_PRODUCT_OVERVIEW_BY_ID,
  GET_PRODUCT_SHIPPING_DETAILS,
  PRODUCT_SERVICE_ENABLED_DISABLED_URL,
  PRODUCTS_TOGGLE_ENABLED_STATUS,
  UPDATE_PRODUCT_DESCRIPTION,
  UPDATE_PRODUCT_IMAGES,
  UPDATE_PRODUCT_OVERVIEW,
  UPDATE_PRODUCT_SHIPPING_DETAILS,
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

export async function getProductDescription(productId) {
  const URL = GET_PRODUCT_DESCRIPTION(productId);
  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateProductDescription(data, productId) {
  productId = parseInt(productId, 10);
  const URL = UPDATE_PRODUCT_DESCRIPTION(productId);
  try {
    const res = await fetch(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text(); // or res.json() if the error response is JSON
      throw new Error(errorText || "Something went wrong");
    }

    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getProductAllImages(productId) {
  productId = parseInt(productId, 10);
  const url = GET_PRODUCT_IMAGES(productId);

  try {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) throw new Error(res.message);

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateProductImages(data, productId) {
  productId = parseInt(productId, 10);
  const url = UPDATE_PRODUCT_IMAGES(productId);
  console.log("Prepared Product Images Data:", data); // Debug data
  console.log("API URL:", url); // Debug URL

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text(); // or res.json() if the error response is JSON}
      throw new Error(errorText || "Something went wrong");
    }

    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getProductShippingDetails(productId) {
  productId = parseInt(productId, 10);
  const url = GET_PRODUCT_SHIPPING_DETAILS(productId);

  try {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) throw new Error(res.message);

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateProductShippingDetails(data, productId) {
  productId = parseInt(productId, 10);
  const url = UPDATE_PRODUCT_SHIPPING_DETAILS(productId);

  console.log("Prepared Product Shipping Details Data:", data);

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text(); // or res.json() if the error response is JSON}
      throw new Error(errorText || "Something went wrong");
    }

    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}
