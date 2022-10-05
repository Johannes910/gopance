import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/bgimageiniciosesion.png"


export const Login = () => {

  return (
    <>

      <Header />
      <main style={{ backgroundImage: `url(${bg_image})` }}>
        <h1 style={{ color: "white" }}>Iniciar Sesión</h1><br />
        <TextInput /><br />
        <TextInput /><br />
        <button texto="Iniciar sesión" />
      </main>

    </>
  )
}