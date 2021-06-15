import PropTypes from "prop-types";
import { useState } from "react";

export const LoginForm = (props) => {
  const { funcionAtras, loginFuncion, usuario } = props;
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const objetoReturn = {
    nombreUsuario,
    password,
  };

  const comparacionDatosUsuario = (usuario, usuarioDummy) => {
    return (
      usuario.usuario === usuarioDummy.nombreUsuario &&
      usuario.password === usuarioDummy.password
    );
  };
  const comprobarLogin = (e) => {
    e.preventDefault();
    debugger;
    if (comparacionDatosUsuario(usuario, objetoReturn)) {
      loginFuncion();
    }
  };

  return (
    <div className="col-4">
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
        onSubmit={(e) => {
          comprobarLogin(e);
        }}
      >
        <h1 className="col-12 titulo text-center">Login</h1>
        <label className="col-6">Usuario:</label>
        <input
          type="text"
          className="col-6"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
        />
        <label className="col-6">Password:</label>
        <input
          type="password"
          className="col-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          Log In
        </button>
      </form>
    </div>
  );
};
