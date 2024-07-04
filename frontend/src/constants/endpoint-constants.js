// user-services

export const USER_SERVICE_BASE_URL = "http://localhost:8000/api/admin/users/";

export const ALL_USER_INFO = `${USER_SERVICE_BASE_URL}/all`;
export const USER_CONTROL_ENABLED_INFO = `${USER_SERVICE_BASE_URL}/control-panel`;
export const GET_USERS_BY_PAGE = (page) =>
  `${USER_SERVICE_BASE_URL}/?page=${page}`;
