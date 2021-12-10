import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorComponent from "../ErrorComponent";
import "./style.css";

function FormRegisterLogin({
  title,
  tittleButton,
  register,
  handlerSubmit,
  userProps,
  error,
}) {
  const initialState = {
    name: userProps ? userProps.name : "",
    email: userProps ? userProps.email : "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(initialState);

  const handlerChange = ({ target }) => {
    const name = target.name;
    setUser({ ...user, [name]: target.value });
  };

  return (
    <div className={register ? "cont-form-register" : "cont-form-login"}>
      <h2 className="title-login">{title}</h2>

      <form onSubmit={(e) => handlerSubmit(e, user)} className="form-login">
        <div hidden={!register} className="cont-inputs-login">
          <label className="label-login" htmlFor="name">
            Nome
          </label>
          <input
            onChange={handlerChange}
            className="input-login"
            type="text"
            name="name"
            id="name"
            value={user.name}
          />
          <div className="underline-login"></div>
        </div>
        <ErrorComponent
          hidden={!register && error.name}
          error={error.name || null}
        />
        <div className="cont-inputs-login">
          <label className="label-login" htmlFor="email">
            Email
          </label>
          <input
            onChange={handlerChange}
            className="input-login"
            type="email"
            name="email"
            id="email"
            value={user.email}
          />
          <div className="underline-login"></div>
        </div>
        <ErrorComponent hidden={!error.email} error={error.email || null} />
        <div hidden={userProps} className="cont-inputs-login">
          <label className="label-login" htmlFor="password">
            Senha
          </label>
          <input
            onChange={handlerChange}
            className="input-login"
            type="password"
            name="password"
            id="password"
            value={user.password}
          />
          <div className="underline-login"></div>
        </div>
        <ErrorComponent
          hidden={!error.password}
          error={error.password || null}
        />
        <div hidden={!register || userProps} className="cont-inputs-login">
          <label className="label-login" htmlFor="password-confirm">
            Confirmar Senha
          </label>
          <input
            onChange={handlerChange}
            className="input-login"
            type="password"
            name="confirmPassword"
            id="password-confirm"
            value={user.confirmPassword}
          />
          <div className="underline-login"></div>
        </div>
        <button type="submit" className="button-login">
          {tittleButton}
        </button>
        <Link hidden={register} className="link-register" to="/register">
          Não tenho Conta
        </Link>
      </form>
    </div>
  );
}

export default FormRegisterLogin;
