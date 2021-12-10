import React, { useState } from "react";
import { registerUser } from "../../api/login";
import FormRegisterLogin from "../../components/FormRegisterLogin";
import cookie from "js-cookie";
import { setLogin } from "../../actions/authLogin";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

function PageRegister() {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e, user) => {
    e.preventDefault();
    registerUser(user)
      .then((response) => {
        cookie.set("token", response.access_token);
        setLogin(response.user);
        navigate("/todo");
      })
      .catch(({ response }) => {
        setError(response.data);
      });
  };
  return (
    <div className="cont-page-login">
      <FormRegisterLogin
        title="Registrar"
        tittleButton="Cadastrar"
        register={true}
        error={error}
        handlerSubmit={handleSubmit}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (user) => dispatch(setLogin(user)),
});

export default connect(null, mapDispatchToProps)(PageRegister);
