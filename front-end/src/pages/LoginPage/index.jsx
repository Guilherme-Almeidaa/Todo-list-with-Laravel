import React from "react";
import { login } from "../../api/login";
import FormRegisterLogin from "../../components/FormRegisterLogin";
import cookie from "js-cookie";
import "./style.css";
import { connect } from "react-redux";
import { setLogin } from "../../actions/authLogin";

function PageLogin({ setLogin }) {
  const handleSubmit = (e, user) => {
    e.preventDefault();
    login(user).then((response) => {
      cookie.set("token", response.access_token);
      cookie.set("user", JSON.stringify(response.user));
      setLogin(response.user);
    });
  };

  return (
    <div className="cont-page-login">
      <FormRegisterLogin
        title="Login"
        tittleButton="Entrar"
        handlerSubmit={handleSubmit}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (user) => dispatch(setLogin(user)),
});

export default connect(null, mapDispatchToProps)(PageLogin);
