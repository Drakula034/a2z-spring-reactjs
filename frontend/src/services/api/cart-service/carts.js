import {
  ADD_ITEM_TO_CART,
  GET_CART_ITEMS,
} from "../../../constants/endpoint-constants";

export async function addItemToCart(customerId, productId, quantity) {
  const URL = ADD_ITEM_TO_CART(customerId, productId, quantity);

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData || "Got an error");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCartItems(customerId) {
  customerId = parseInt(customerId, 10);
  const URL = GET_CART_ITEMS(customerId);

  try {
    const res = await fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData || "Got an error");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
