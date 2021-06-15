import { useState } from "react";
import { RegistroPersonalData } from "./components/RegistroPersonalData";
import { RegistroUserData } from "./components/RegistroUserData";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
    usuario: "",
    pass: "",
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

      {indice === 3 && console.log("tamos en la parte final")}
    </div>
  );
}

export default App;
