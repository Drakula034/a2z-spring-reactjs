import { json } from "react-router-dom";

export async function getUserInfo() {
  const url = "http://localhost:8000/api/admin/users/all";

  try {
    const res = await fetch(url, { mode: "cors", method: "GET" });
    if (!res.ok) {
      return "Having some error";
    }
    const data = await res.json();
    const user = JSON.stringify(data);
    return user;
    // console.log("user: " + user);
  } catch (err) {
    console.error(err);
  }
}
