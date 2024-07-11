import {
  BRANDS_BY_PAGE,
  BRANS_SERVICE_TOTAL_COUNT,
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
