import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Ingresar} from "./Ingresar";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Buscar} from './Explorar';
import { Cuenta } from './Pages/Cuenta';

function Main(){
  return(
<BrowserRouter>
<Link></Link>
<Routes>
<Route path="/" element={<App />} />
<Route path="/Ingresar" element={<Ingresar />} />
<Route path="/Explorar" element={<Buscar />} />
<Route path="/pages/Cuenta" element={<Cuenta />} />




</Routes>
</BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
