import { BRANS_SERVICE_TOTAL_COUNT } from "../../../constants/endpoint-constants";

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
