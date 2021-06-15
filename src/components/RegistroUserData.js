import PropTypes from "prop-types";
import { useState } from "react";

export const RegistroUserData = (props) => {
  const { registroUserData, funcionAtras } = props;
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepetida, setPasswordRepetida] = useState("");

  const comprobarPassword = ({ password }, passwordRepetida) => {
    return password === passwordRepetida ? true : false;
  };
  const returnUsuario = (e, objetoUsuario) => {
    const continuar = comprobarPassword(objetoUsuario, passwordRepetida);

    if (continuar) {
      registroUserData(e, objetoReturn);
    }
  };

  const objetoReturn = {
    usuario,
    password,
  };

  return (
    <form
      className="
        bg-light
        cajaFormulario
        row
        p-3
        rounded
        align-items-center
        justify-content-center
      "
      onSubmit={(e) => returnUsuario(e, objetoReturn)}
    >
      <h1 className="col-12 titulo text-center">Datos de usuario</h1>
      <label className="col-6">Usuario:</label>
      <input
        type="text"
        className="col-6"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <label className="col-6">Password:</label>
      <input
        type="password"
        className="col-6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="col-6">Repetir Password:</label>
      <input
        type="password"
        className="col-6"
        value={passwordRepetida}
        onChange={(e) => setPasswordRepetida(e.target.value)}
      />
      <button
        type="button"
        className="col-4 btn bg-primary text-light m-1"
        onClick={funcionAtras}
      >
        Atrás
      </button>
      <div className="col-3"></div>
      <button type="submit" className="col-4 btn bg-primary text-light m-1">
        Siguiente
      </button>
    </form>
  );
};
