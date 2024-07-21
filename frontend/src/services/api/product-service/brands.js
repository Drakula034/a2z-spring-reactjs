import {
  BRANDS_BY_PAGE,
  BRANS_SERVICE_TOTAL_COUNT,
  CREATE_BRAND,
  DELETE_BRAND_BY_ID,
  GET_ALL_BRANDS,
  UPDATE_BRAND,
} from "../../../constants/endpoint-constants";

export async function getBrandCount() {
  const url = BRANS_SERVICE_TOTAL_COUNT;

  try {
    const response = await fetch(url, { mode: "cors", method: "GET" });
    // console.log(response);
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getBrandsByPage(page) {
  const url = BRANDS_BY_PAGE(page);
  try {
    const response = await fetch(url, { mode: "cors", method: "GET" });
    if (!response.ok) {
      throw new Error(response.message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return new Error(err.message);
  }
}

export async function getAllBrandsNames() {
  const URL = GET_ALL_BRANDS;

  try {
    const res = await fetch(URL, { mode: "cors", method: "GET" });
    if (!res.ok) {
      throw new Error(res.message);
    }

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteBrandById(brandId) {
  console.log("API call - Brand ID:", brandId);
  const URL = DELETE_BRAND_BY_ID(brandId);

  try {
    const response = await fetch(URL, { method: "DELETE" });

    if (!response.ok) {
      // Parse the error message from the response body if available
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete the brand.");
    }

    return { success: true };
  } catch (err) {
    // Provide a fallback message in case err.message is undefined
    throw new Error(err.message || "An unexpected error occurred.");
  }
}

export async function createBrand(data) {
  const URL = CREATE_BRAND;

  try {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "An error occurred");
    }

    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateBrand(data, brandId) {
  console.log("API call - Brand ID:", brandId);
  console.log("API call - data:", data);
  const URL = UPDATE_BRAND(brandId);

  try {
    const res = await fetch(URL, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "An error occurred");
    }

    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}
