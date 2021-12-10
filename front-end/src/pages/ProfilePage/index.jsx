import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../api/login";
import FormRegisterLogin from "../../components/FormRegisterLogin";
import cookie from "js-cookie";
import "./style.css";
import { useNavigate } from "react-router";

function ProfilePage({ user }) {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const updateInfoUser = (e, user) => {
   
    e.preventDefault();
    const token = cookie.get("token");
    updateUser({ email: user.email, name: user.name }, token)
      .then((_response) => {
        navigate("/profile");
      })
      .catch(({ response }) => {
        setError(response.data);
      });
  };

  return (
    <div className="cont-page-login">
      <FormRegisterLogin
        title="Perfil"
        tittleButton="Atualizar"
        register={true}
        userProps={user}
        error={error}
        handlerSubmit={updateInfoUser}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfilePage);
