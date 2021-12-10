import { SET_LOGIN, SET_LOGOUT } from "./types";

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});

export const setLogout = () => ({
  type: SET_LOGOUT,
});
