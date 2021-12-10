import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function FormRegisterLogin({ title, tittleButton, register, handlerSubmit }) {
  const initialState = {
    name: "",
    email: "",
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
          />
          <div className="underline-login"></div>
        </div>
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
          />
          <div className="underline-login"></div>
        </div>
        <div className="cont-inputs-login">
          <label className="label-login" htmlFor="password">
            Senha
          </label>
          <input
            onChange={handlerChange}
            className="input-login"
            type="password"
            name="password"
            id="password"
          />
          <div className="underline-login"></div>
        </div>
        <div hidden={!register} className="cont-inputs-login">
          <label className="label-login" htmlFor="password-confirm">
            Confirmar Senha
          </label>
          <input
            onChange={handlerChange}
            className="input-login"
            type="password"
            name="confirmPassword"
            id="password-confirm"
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
