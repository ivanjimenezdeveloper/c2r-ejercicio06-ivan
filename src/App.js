import { useState } from "react";
import { RegistroPersonalData } from "./components/RegistroPersonalData";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
    usuario: "",
    pass: "",
  });

  const registroDatosPersonales = (e, objetoDatos) => {
    e.preventDefault();

    setUsuario({
      ...usuario,
      nombre: objetoDatos.nombre,
      apellidos: objetoDatos.apellidos,
      fechaNacimiento: objetoDatos.fechaNacimiento,
      email: objetoDatos.email,
    });
  };
  return (
    <div className="bg-primary vh-100 d-flex align-items-center justify-content-center containerCustom">
      <RegistroPersonalData
        usuario={usuario}
        setUsuario={registroDatosPersonales}
      />
    </div>
  );
}

export default App;
