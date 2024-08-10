import {
  ADD_ITEM_TO_CART,
  GET_CART_ITEMS,
  GET_PRODUCT_INFO_FOR_CART,
} from "../../../constants/endpoint-constants";

// export async function addItemToCart(customerId, productId, quantity) {
//   customerId = parseInt(customerId, 10);
//   quantity = parseInt(quantity, 10);
//   const URL = ADD_ITEM_TO_CART(customerId, productId, quantity);
//   console.log("URL" + URL);
//   try {
//     // Perform the fetch request
//     const res = await fetch(URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     });

//     // Check if the response is not okay
//     if (!res.ok) {
//       let errorData;
//       try {
//         errorData = await res.json(); // Attempt to parse JSON error response
//       } catch (e) {
//         errorData = "An error occurred"; // Fallback error message
//       }
//       throw new Error(errorData || "Got an error");
//     }

//     const data = await res.json();
//     return data;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }

export async function addItemToCart(customerId, productId, quantity) {
  customerId = parseInt(customerId, 10);
  quantity = parseInt(quantity, 10);

  const URL = ADD_ITEM_TO_CART(customerId, productId, quantity);
  console.log("URL: " + URL);

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const contentType = res.headers.get("Content-Type");

    if (!res.ok) {
      let errorData;
      try {
        if (contentType && contentType.includes("application/json")) {
          errorData = await res.json(); // Attempt to parse JSON error response
        } else {
          errorData = await res.text(); // Fallback to text if not JSON
        }
      } catch (e) {
        errorData = "An unexpected error occurred"; // Fallback error message
      }
      throw new Error(errorData || "Got an error");
    }

    if (contentType && contentType.includes("application/json")) {
      const data = await res.json(); // Parse JSON if content type is JSON
      return data;
    } else {
      const data = await res.text(); // Handle as text if content type is not JSON
      return data;
    }
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

export async function getProductInfoForCart(productId) {
  productId = parseInt(productId, 10);
  const URL = GET_PRODUCT_INFO_FOR_CART(productId);

  try {
    const res = await fetch(URL, {
      method: "GET",
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
