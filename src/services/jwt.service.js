const accessToken = "__ecoAccess__";
const refreshToken = "__ecoRefresh__";

export const saveTokens = (data) => {
  window.localStorage.setItem(accessToken, data.access);
  window.localStorage.setItem(refreshToken, data.refresh);
};

export const getAccessToken = () => {
  return window.localStorage.getItem(accessToken);
};

export const getRefreshToken = () => {
  return window.localStorage.getItem(refreshToken);
};

export const destroyTokens = () => {
  window.localStorage.removeItem(accessToken);
  window.localStorage.removeItem(refreshToken);
};

export default {
  saveTokens,
  getAccessToken,
  getRefreshToken,
  destroyTokens,
  saveUserData,
  getUserData,
};
