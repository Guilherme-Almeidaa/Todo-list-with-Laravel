import { combineReducers } from "redux";
import authReducer from "./authReducer";
import todoList from "./todoReducer";

const rootReducer = combineReducers({ auth: authReducer, todoList });

export default rootReducer;
