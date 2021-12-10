import { getById } from "../api/todoApi";
import {
  GET_LIST,
  SELECTED_TASK,
  REQUEST_LIST,
  FAILED_REQUEST,
  ERROR_MESSAGE,
} from "./types";

export const isLoadding = (status) => ({
  type: "IS_LOADDING",
  payload: status,
});

export const getTask = (task) => ({
  type: GET_LIST,
  payload: task,
});

const requestTask = () => ({
  type: REQUEST_LIST,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

export const sendErrorMessage = (message, status) => ({
  type: ERROR_MESSAGE,
  payload: message,
  status,
});

export const selectedTask = (task) => ({
  type: SELECTED_TASK,
  payload: task,
});

export const fetchTask = (id) => {
  return (dispatch) => {
    dispatch(requestTask());
    getById(id)
      .then((response) => {
        dispatch(selectedTask(response));
      })
      .catch((error) => {
        dispatch(failedRequest({ error }));
      });
  };
};
