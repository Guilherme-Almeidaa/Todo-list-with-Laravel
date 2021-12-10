import { SET_LOGIN, SET_LOGOUT } from "../actions/types";

const initialState = {
  loggedIn: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, loggedIn: true, user: action.payload };
    case SET_LOGOUT:
      return { ...state, loggedIn: false };

    default:
      return state;
  }
};

export default authReducer;
