import {
  CATEGORY_BY_PAGE,
  CATEGORY_SERVICE_ENABLED_DISABLED_URL,
  CATEGORY_TOGGLE_ENABLED_STATUS,
  GET_ALL_CATEGORY,
} from "../../../constants/endpoint-constants";
export async function getEnabledDisabledCategory() {
  const url = CATEGORY_SERVICE_ENABLED_DISABLED_URL;

  try {
    const response = await fetch(url, { mode: "cors", method: "GET" });
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCategoryByPage(page) {
  const url = CATEGORY_BY_PAGE(page);
  // console.log("page: " + page);
  // console.log("url: " + url);

  try {
    const response = await fetch(url, { mode: "cors", method: "GET" });
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getAllCategory() {
  const url = GET_ALL_CATEGORY;

  try {
    const response = await fetch(url, { mode: "cors", method: "GET" });
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function toggleCategoryEnabledStatus(categoryId) {
  const URL = CATEGORY_TOGGLE_ENABLED_STATUS(categoryId);

  try {
    const response = await fetch(URL, { mode: "cors", method: "PUT" });
    if (!response.ok) throw new Error(response.message);

    return { success: true };
  } catch (err) {
    throw new Error(err.message);
  }
}
