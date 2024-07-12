// user-services

export const USER_SERVICE_BASE_URL = "http://localhost:8000/api/admin/users/";
export const USER_SERVICE_ROLES_BASE_URL =
  "http://localhost:8000/api/admin/roles/";

export const ALL_USER_INFO = `${USER_SERVICE_BASE_URL}/all`;
export const USER_BY_ID = (userId) => `${USER_SERVICE_BASE_URL}/${userId}`;
export const USER_CONTROL_ENABLED_INFO = `${USER_SERVICE_BASE_URL}/control-panel`;
export const GET_USERS_BY_PAGE = (page) =>
  `${USER_SERVICE_BASE_URL}/?page=${page}`;

export const USER_ROLES_GET_ALL = `${USER_SERVICE_ROLES_BASE_URL}/all`;

// product-service
// categroy

export const CATEGORY_SERVICE_BASE_URL =
  "http://localhost:8000/api/admin/categories";

export const CATEGORY_SERVICE_ENABLED_DISABLED_URL = `${CATEGORY_SERVICE_BASE_URL}/control-panel`;
export const CATEGORY_BY_PAGE = (page) => {
  return `${CATEGORY_SERVICE_BASE_URL}?page=${page}`;
};

export const GET_ALL_CATEGORY = `${CATEGORY_SERVICE_BASE_URL}/all-names`;

// brands

export const BRAND_SERVICE_BASE_URL = "http://localhost:8000/api/admin/brands";
export const BRANS_SERVICE_TOTAL_COUNT = `${BRAND_SERVICE_BASE_URL}/control-panel`;
export const BRANDS_BY_PAGE = (page) => {
  return `${BRAND_SERVICE_BASE_URL}?page=${page}`;
};

// product

export const PRODUCT_SERVICE_BASE_URL =
  "http://localhost:8000/api/admin/products";

export const PRODUCT_SERVICE_ENABLED_DISABLED_URL = `${PRODUCT_SERVICE_BASE_URL}/control-panel`;
export const GET_PRODUCT_BY_PAGE = (page) => {
  return `${PRODUCT_SERVICE_BASE_URL}?page=${page}`;
};
