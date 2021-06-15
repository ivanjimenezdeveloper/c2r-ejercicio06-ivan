import PropTypes from "prop-types";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { LoginDatos } from "./LoginDatos";

export const Login = (props) => {
  const { registroUserData, funcionAtras, usuario } = props;
  const [datos, setDatos] = useState(false);
  const loginFuncion = () => {
    setDatos(true);
  };

  debugger;
  return (
    <>
      <LoginForm
        funcionAtras={funcionAtras}
        loginFuncion={loginFuncion}
        usuario={usuario}
      />
      {datos && <LoginDatos usuario={usuario} />}
    </>
  );
};

Login.propTypes = {
  usuario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    usuario: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};
