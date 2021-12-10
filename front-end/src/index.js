import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import cookie from "js-cookie";
import { requestUser } from "./api/login";
import { setLogin } from "./actions/authLogin";
import store from "./store";

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

const getUser = () => {
  let token = cookie.get("token");
  if (token) {
    requestUser(token)
      .then((response) => {
        store.dispatch(setLogin(response));
        render();
      })
      .catch((_error) => {
        cookie.remove("token");
        token = null;
        render();
      });
  } else {
    render();
  }
};

getUser();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
