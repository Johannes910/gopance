import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './pages/Inicio/pg_inicio.js';
import { Alimentos } from "./pages/Alimentos/pg_alimentos";
import { Servicios } from "./pages/Servicios/pg_servicios"
import { TusPedidos } from "./pages/TusPedidos/pg_tuspedidos"
import { RegistroUsuario } from './pages/RegistroUsuario/pg_registrousuario';
import { RegistroVendedor } from './pages/RegistroVendedor/pg_registrovendedor';
import {Login} from './pages/Login/pg_login.js'
import {CrearProducto} from './pages/CrearProducto/pg_crearproducto.js'
import {app} from './firebase/firebaseConfig';
import { useState } from "react";

export const App = () => {

  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="home" element={<Inicio />} />
        <Route path="alimentos" element={<Alimentos />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="pedidos" element={<TusPedidos />} />
        <Route path="registrarcliente" element={<RegistroUsuario />} />
        <Route path="registrarvendedor" element={<RegistroVendedor />} />
        <Route path="login" element={<Login />} />
        <Route path="crearproducto" element={<CrearProducto />} />
      </Routes>

    </>
  )
}