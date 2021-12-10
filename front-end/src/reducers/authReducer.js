import { SET_LOGIN } from "../actions/types";

const initialState = {
  loggedIn: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, loggedIn: true, user: action.payload };

    default:
      return state;
  }
};

export default authReducer;
