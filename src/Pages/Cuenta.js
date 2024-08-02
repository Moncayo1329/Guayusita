import React, { useState } from "react";
import { Inicio } from "../Menu";
import './cuenta.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Cuenta() {
  const [formData, setFormData] = useState({
    guayusita: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para manejar el submit del formulario
  };

  return (
    <div>
      <Inicio />
      <div className="container mt-5">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <div className="home_container">
        <section className="home_section">
        <input type="text" className="home_input" value=""/>
        <span>guayusita.app/</span>
                </section>
        </div>

</div>



<div className="mb-3">
    <label htmlFor="correo" className="container mt-5"></label>
    <section className="home_section2">
        <input
            placeholder="correo electronico"
            type="email"
            className="home_input2"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
        />
    </section>
</div>



          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input
            placeholder="correo"
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
