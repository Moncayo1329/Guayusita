import React from "react";
import { Inicio } from "../Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Cuenta() {
  const formData = {
    nombre: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  };

  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Inicio />
      <div className="container mt-5">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmarContraseña" className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmarContraseña"
              name="confirmarContraseña"
              value={formData.confirmarContraseña}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Crear Cuenta</button>
        </form>
      </div>
    </div>
  );
}

export { Cuenta };
