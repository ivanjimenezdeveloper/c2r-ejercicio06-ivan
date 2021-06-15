export const LoginDatos = (props) => {
  const {
    usuario: { nombre, apellidos, fechaNacimiento, email, usuario },
  } = props;

  return (
    <div className="col-4">
      <div
        className="bg-light
        cajaFormulario
        row
        p-3
        rounded
        align-items-center
        justify-content-center"
      >
        <h1 className="col-12 titulo text-center">Datos de {usuario} </h1>
        <label className="col-12">Nombre: {nombre}</label>
        <label className="col-12">Apellidos: {apellidos}</label>
        <label className="col-12">Fecha de nacimiento: {fechaNacimiento}</label>
        <label className="col-12">E-mail: {email}</label>
      </div>
    </div>
  );
};
