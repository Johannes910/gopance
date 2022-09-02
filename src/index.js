import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './pages/Login/pg_login.js';
import { TusPedidos } from './pages/TusPedidos/pg_tuspedidos';
import {RegistroVendedor} from './pages/RegistroVendedor/pg_registrovendedor.js';
import {RegistroUsuario} from './pages/RegistroUsuario/pg_registrousuario.js';
import {CrearProducto} from './pages/CrearProducto/pg_crearproducto.js';
import {Comidas} from './pages/Alimentos/pg_alimentos.js';
import {Servicios} from './pages/Servicios/pg_servicios.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Servicios/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
