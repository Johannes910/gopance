import React from 'react';
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { BGImage } from "./components/BGImage.jsx"
import { Button } from "./components/Button.jsx"
import bg_image from "./assets/images/bgimage1.png"
import gopancelogo from "./assets/images/gopancelogo.png"
export const App = () => {

  return (
    <>
      <Header />

<main style={{backgroundImage: `url(${bg_image})`}}>
<br/><br/>
         <img src={gopancelogo} position="relative" /><br/><br/>
         <h1 style={{color:"white"}}>Tu mejor opción para pedir!</h1>
         <p style={{color:"white"}}>Nuestra App permite a todos los cale;os disfrutar de la grán variedad de comidas y servicios que existen en Pueblito Pance!</p>
         <h2 style={{color:"white"}}> Ingresa como</h2>
         <Button/><br/><Button/>
      </main>

      <Footer />
    </>
  )
}