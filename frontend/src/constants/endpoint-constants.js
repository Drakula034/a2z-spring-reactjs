// user-services

export const USER_SERVICE_BASE_URL = "http://localhost:8000/api/admin/users";
export const USER_SERVICE_ROLES_BASE_URL =
  "http://localhost:8000/api/admin/roles";

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

export const CATEGORY_SERVICE_BASE_URL =
  "http://localhost:8000/api/admin/categories";

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

export const BRAND_SERVICE_BASE_URL = "http://localhost:8000/api/admin/brands";
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

export const PRODUCT_SERVICE_BASE_URL =
  "http://localhost:8000/api/admin/products";

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
