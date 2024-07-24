import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Inicio() {
  return ( 
    <div>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Guayusita</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link " href="#">Explorar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ingresar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Crear Cuenta</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  );
}

export default Inicio;


