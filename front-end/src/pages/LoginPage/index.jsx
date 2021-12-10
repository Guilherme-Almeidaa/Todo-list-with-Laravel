import React, { useState } from "react";
import { login } from "../../api/login";
import FormRegisterLogin from "../../components/FormRegisterLogin";
import cookie from "js-cookie";
import "./style.css";
import { connect } from "react-redux";
import { setLogin } from "../../actions/authLogin";

function PageLogin({ setLogin }) {
  const [error, setError] = useState({});
  const handleSubmit = (e, { email, password }) => {
    e.preventDefault();

    login({ email, password })
      .then((response) => {
        cookie.set("token", response.access_token);
        setLogin(response.user);
      })
      .catch(({ response }) => {
        setError(response.data);
      });
  };

  return (
    <div className="cont-page-login">
      <FormRegisterLogin
        title="Login"
        tittleButton="Entrar"
        handlerSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (user) => dispatch(setLogin(user)),
});

export default connect(null, mapDispatchToProps)(PageLogin);
