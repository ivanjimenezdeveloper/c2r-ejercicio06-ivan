function App() {
  return (
    <div
      className="bg-primary vh-100 d-flex align-items-center justify-content-center container
"
    >
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
      >
        <h1 className="col-12 titulo text-center">Registro</h1>
        <label className="col-6">Nombre:</label>{" "}
        <input type="text" className="col-6" />
        <label className="col-6">Apellidos:</label>
        <input type="text" className="col-6" />
        <label className="col-6">Fecha Nacimiento:</label>
        <input type="date" className="col-6" />{" "}
        <label className="col-6">E-mail </label>
        <input type="email" className="col-6" />
        <button className="col-12 btn bg-primary text-light">Registrar</button>
      </form>
    </div>
  );
}

export default App;
