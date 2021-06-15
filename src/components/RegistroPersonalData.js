import PropTypes from "prop-types";
import { useState } from "react";

export const RegistroPersonalData = (props) => {
  const { setUsuario } = props;

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");

  const objetoReturn = {
    nombre,
    apellidos,
    fechaNacimiento,
    email,
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
      onSubmit={(e) => setUsuario(e, objetoReturn)}
    >
      <h1 className="col-12 titulo text-center">Datos Personales</h1>
      <label className="col-6">Nombre:</label>
      <input
        type="text"
        className="col-6"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label className="col-6">Apellidos:</label>
      <input
        type="text"
        className="col-6"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />
      <label className="col-6">Fecha Nacimiento:</label>
      <input
        type="date"
        className="col-6"
        value={fechaNacimiento}
        onChange={(e) => setFechaNacimiento(e.target.value)}
      />
      <label className="col-6">E-mail </label>
      <input
        type="email"
        className="col-6"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="col-12 btn bg-primary text-light">
        Siguiente
      </button>
    </form>
  );
};
// RegistroPersonalData.propTypes = {
//   usuario: PropTypes.shape({
//     nombre: PropTypes.string.isRequired,
//     apellidos: PropTypes.string.isRequired,
//     fechaNacimiento: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     usuario: PropTypes.string,
//     pass: PropTypes.string,
//   }).isRequired,
// };
