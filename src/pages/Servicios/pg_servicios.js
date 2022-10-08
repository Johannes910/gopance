import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/bgimage1.png"
import defaultpfp from "../../assets/images/defaultpfp.png"
import { Footer } from '../../components/Footer.jsx';
import { Card } from '../../components/Card.jsx';

export const Servicios = () => {

  return (
    <>
      <Header />

      <main style={{ backgroundImage: `url(${bg_image})` }}>
        <h1 style={{ color: "white" }}>¿Qué hay para hacer hoy?</h1><br />
        <p style={{ color: "white" }}>Aprovecha nuestras recomendaciones y los productos más solicitados. ¡Abajo puedes observar todos los servicios disponibles!</p><br />
        <Card />

      </main>
      <Footer />

    </>
  )
}