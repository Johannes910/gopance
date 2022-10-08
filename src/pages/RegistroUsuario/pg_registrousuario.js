import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/bgimage1.png"
import defaultpfp from "../../assets/images/defaultpfp.png"
import { ImageSelector } from '../../components/ImageSelector.jsx';


export const RegistroUsuario = () => {

  return (
    <>
      <Header />

      <main style={{ backgroundImage: `url(${bg_image})` }}>
        <h1 style={{ color: "white" }}>Registrarse como cliente</h1><br />

        <img src={defaultpfp} position="relative" width="100px" height="100px" alt="pfp" /><ImageSelector /><br />
        <TextInput /><br />
        <TextInput /><br />
        <TextInput /><br />
        <TextInput /><br />
        <button texto={"Registrarse"} />

      </main>
    </>
  )
}