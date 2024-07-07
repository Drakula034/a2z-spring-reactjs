import { USER_ROLES_GET_ALL } from "../../../constants/endpoint-constants";

export async function getAllRoles() {
  const url = USER_ROLES_GET_ALL;

  try {
    const res = await fetch(url, { mode: "cors", method: "GET" });
    if (!res.ok) {
      throw new Error("Could not fetch url, see the message:" + res.message);
    }

    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}
