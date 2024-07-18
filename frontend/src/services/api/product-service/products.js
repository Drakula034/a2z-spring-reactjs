import {
  GET_PRODUCT_BY_PAGE,
  PRODUCT_SERVICE_ENABLED_DISABLED_URL,
  PRODUCTS_TOGGLE_ENABLED_STATUS,
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
