import { useState } from "react";
import { RegistroPersonalData } from "./components/RegistroPersonalData";
import { RegistroUserData } from "./components/RegistroUserData";
import { Login } from "./components/Login";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
    usuario: "",
    password: "",
  });

  const [indice, setIndice] = useState(1);

  const registroDatosPersonales = (e, objetoDatos) => {
    e.preventDefault();
    setIndice(2);
    setUsuario({
      ...usuario,
      nombre: objetoDatos.nombre,
      apellidos: objetoDatos.apellidos,
      fechaNacimiento: objetoDatos.fechaNacimiento,
      email: objetoDatos.email,
    });
  };

  const registroUserData = (e, objetoDatos) => {
    e.preventDefault();
    setIndice(3);
    setUsuario({
      ...usuario,
      usuario: objetoDatos.usuario,
      password: objetoDatos.password,
    });
  };

  const atras = () => {
    setIndice(indice - 1);
  };

  return (
    <div className="bg-primary vh-100 d-flex align-items-center justify-content-center containerCustom">
      {indice === 1 && (
        <RegistroPersonalData setUsuario={registroDatosPersonales} />
      )}

      {indice === 2 && (
        <RegistroUserData
          registroUserData={registroUserData}
          funcionAtras={atras}
        />
      )}

      {indice === 3 && <Login funcionAtras={atras} usuario={usuario} />}
    </div>
  );
}

export default App;
