import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './pages/Inicio/pg_inicio.js';
import { Alimentos } from "./pages/Alimentos/pg_alimentos";
import { Servicios } from "./pages/Servicios/pg_servicios"
import { TusPedidos } from "./pages/TusPedidos/pg_tuspedidos"

export const App = () => {

  return (
    <>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="alimentos" element={<Alimentos />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="pedidos" element={<TusPedidos />} />
      </Routes>

    </>
  )
}