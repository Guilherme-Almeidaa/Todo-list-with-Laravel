import React from "react";
import FormRegisterLogin from "../../components/FormRegisterLogin";

function PageRegister() {
  return (
    <div className="cont-page-login">
      <FormRegisterLogin
        title="Registrar"
        tittleButton="Cadastrar"
        register={true}
      />
    </div>
  );
}

export default PageRegister;
