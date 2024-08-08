import {
  USER_SERVICE_BASE_URL,
  USER_SERVICE_ROLES_BASE_URL,
  CATEGORY_SERVICE_BASE_URL,
  BRAND_SERVICE_BASE_URL,
  PRODUCT_SERVICE_BASE_URL,
  PRODUCT_SERVICE_BASE_FOR_CUSTOMER,
  CUSTOMER_SERVICE_BASE_FOR_CUSTOMER,
  CUSTOMER_SERVICE_BASE_FOR_CUSTOMER_INFO,
  CUSTOMER_SERVICE_BASE_FOR_ADDRESS,
  CART_SERVICE_BASE_URL,
} from "./url-constants";
// user-services

export const ALL_USER_INFO = `${USER_SERVICE_BASE_URL}/all`;
export const USER_BY_ID = (userId) => `${USER_SERVICE_BASE_URL}/${userId}`;
export const USER_CONTROL_ENABLED_INFO = `${USER_SERVICE_BASE_URL}/control-panel`;
export const GET_USERS_BY_PAGE = (page) =>
  `${USER_SERVICE_BASE_URL}/?page=${page}`;

export const USER_ROLES_GET_ALL = `${USER_SERVICE_ROLES_BASE_URL}/all`;
export const USERS_ENABLED_DISABLED_STATUS = (userId) =>
  `${USER_SERVICE_BASE_URL}/${userId}/toggle-status`;

export const DELETE_USER_BY_ID = (userId) =>
  `${USER_SERVICE_BASE_URL}/${userId}`;

export const CREATE_USER = `${USER_SERVICE_BASE_URL}/create`;
export const UPDATE_USER = `${USER_SERVICE_BASE_URL}/update`;

// product-service
// categroy

export const CATEGORY_SERVICE_ENABLED_DISABLED_URL = `${CATEGORY_SERVICE_BASE_URL}/control-panel`;
export const CATEGORY_BY_PAGE = (page) => {
  return `${CATEGORY_SERVICE_BASE_URL}?page=${page}`;
};

export const GET_ALL_CATEGORY = `${CATEGORY_SERVICE_BASE_URL}/all-names`;
export const CATEGORY_TOGGLE_ENABLED_STATUS = (categoryId) =>
  `${CATEGORY_SERVICE_BASE_URL}/${categoryId}/toggle-status`;

export const DELETE_CATEGORY_BY_ID = (categoryId) =>
  `${CATEGORY_SERVICE_BASE_URL}/${categoryId}`;

export const CREATE_CATEGORY = `${CATEGORY_SERVICE_BASE_URL}/add`;
export const UPDATE_CATEGORY = `${CATEGORY_SERVICE_BASE_URL}/update`;

// brands

export const BRANS_SERVICE_TOTAL_COUNT = `${BRAND_SERVICE_BASE_URL}/control-panel`;
export const BRANDS_BY_PAGE = (page) => {
  return `${BRAND_SERVICE_BASE_URL}?page=${page}`;
};

export const GET_ALL_BRANDS = `${BRAND_SERVICE_BASE_URL}/all-names`;
export const DELETE_BRAND_BY_ID = (brandId) =>
  `${BRAND_SERVICE_BASE_URL}/${brandId}`;

export const CREATE_BRAND = `${BRAND_SERVICE_BASE_URL}/add`;
export const UPDATE_BRAND = (brandId) =>
  `${BRAND_SERVICE_BASE_URL}/${brandId}/update`;

// product

export const PRODUCT_SERVICE_ENABLED_DISABLED_URL = `${PRODUCT_SERVICE_BASE_URL}/control-panel`;
export const GET_PRODUCT_BY_PAGE = (page) => {
  return `${PRODUCT_SERVICE_BASE_URL}?page=${page}`;
};

export const PRODUCTS_TOGGLE_ENABLED_STATUS = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/toggle-status`;

export const DELETE_PRODUCT_BY_ID = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}`;

export const CREATE_PRODUCT_OVERVIEW = `${PRODUCT_SERVICE_BASE_URL}/addOverview`;

export const GET_PRODUCT_OVERVIEW_BY_ID = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/editOverView`;
export const UPDATE_PRODUCT_OVERVIEW = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/editOverView`;

export const UPDATE_PRODUCT_DESCRIPTION = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/updateDescription`;
export const GET_PRODUCT_DESCRIPTION = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/getDescription`;

export const GET_PRODUCT_IMAGES = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/getImages`;
export const UPDATE_PRODUCT_IMAGES = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/updateImages`;

export const UPDATE_PRODUCT_SHIPPING_DETAILS = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/updateShippingDetails`;
export const GET_PRODUCT_SHIPPING_DETAILS = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/getShippingDetails`;

export const GET_PRODUCT_PRODUCT_DETAILS = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/productDetails`;
export const UPDATE_PRODUCT_PRODUCT_DETAILS = (productId) =>
  `${PRODUCT_SERVICE_BASE_URL}/${productId}/updateProductDetails`;

// product for customer
export const GET_PRODUCT_FOR_CUSTOMER_MAIN_PAGE = (categoryName, categoryCnt) =>
  `${PRODUCT_SERVICE_BASE_FOR_CUSTOMER}/list/${categoryName}?limit=${categoryCnt}`;

export const GET_PRODUCT_FOR_CUSTOMER_CATEGORY_PAGE = (
  categoryName,
  categoryCnt
) =>
  `${PRODUCT_SERVICE_BASE_FOR_CUSTOMER}/category/${categoryName}?limit=${categoryCnt}`;

export const GET_PRODUCT_BY_PRODUCT_ID = (productId) =>
  `${PRODUCT_SERVICE_BASE_FOR_CUSTOMER}?productId=${productId}`;

// customers
export const GET_CUSTOMER_FOR_MAIN_PAGE_BY_ID = (customerId) =>
  `${CUSTOMER_SERVICE_BASE_FOR_CUSTOMER}/${customerId}`;

export const CREATE_CUSTOMER = `${CUSTOMER_SERVICE_BASE_FOR_CUSTOMER}/register`;
export const CUSTOMER_LOGIN = `${CUSTOMER_SERVICE_BASE_FOR_CUSTOMER}/login`;
export const CUSTOMER_INFO_PERSONAL = (customerId) =>
  `${CUSTOMER_SERVICE_BASE_FOR_CUSTOMER_INFO}/${customerId}`;

export const CREATE_ADDRESS = `${CUSTOMER_SERVICE_BASE_FOR_ADDRESS}/add`;
export const GET_ALL_ADDRESS_OF_CUSTOMER = (customerId) =>
  `${CUSTOMER_SERVICE_BASE_FOR_ADDRESS}/all?customerId=${customerId}`;

export const ADD_ITEM_TO_CART = (customerId, productId, quantity) =>
  `${CART_SERVICE_BASE_URL}/${customerId}/${productId}/${quantity}`;

export const GET_CART_ITEMS = (customerId) =>
  `${CART_SERVICE_BASE_URL}/get/${customerId}`;
