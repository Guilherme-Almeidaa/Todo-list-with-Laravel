import {
  GET_LIST,
  REQUEST_LIST,
  FAILED_REQUEST,
  ERROR_MESSAGE,
  SELECTED_TASK,
} from "../actions/types";

const initalState = {
  tasks: [],
  isFetching: false,
  error: "",
  statusError: false,
  taskSelect: {},
  isLoadding: false,
};

const todoList = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_LIST:
      return { ...state, isFetching: true };
    case GET_LIST:
      return { ...state, isFetching: false, taskSelect: action.payload };
    case FAILED_REQUEST:
      return { ...state, isFetching: false, taskSelect: action.payload };
    case SELECTED_TASK:
      return { ...state, isFetching: false, taskSelect: action.payload };
    case "IS_LOADDING":
      return { ...state, isFetching: false, isLoadding: action.payload };
    case ERROR_MESSAGE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        statusError: action.status,
      };
    default:
      return state;
  }
};

export default todoList;
