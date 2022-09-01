import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import { Button } from "../../components/Button.jsx"
import { ImageSelector } from "../../components/ImageSelector.jsx"
import bg_image from "../../assets/images/bgimage1.png"
import defaultpfp from "../../assets/images/defaultpfp.png"


export const CrearProducto = () => {

  return (
    <>
      <Header />

  <main style={{backgroundImage: `url(${bg_image})`}}>
      <h1 style={{color:"white"}}>Crear Productor</h1><br/>
<ImageSelector/><br/>

      <TextInput/><br/>
      <TextInput/><br/>
            <TextInput/><br/>
      <TextInput/><br/>
        <Button />

      </main>
    </>
  )
}