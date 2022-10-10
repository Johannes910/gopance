import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"

import bg_image from "../../assets/images/bgimage1.png"
import defaultpfp from "../../assets/images/defaultpfp.png"
import { Footer } from '../../components/Footer.jsx';
import { Card } from '../../components/Card.jsx';
import fritangaImg from '../../assets/images/1.png'
import sancochoImg from '../../assets/images/2.png'
import '../../css/alimentos.css'


export const Alimentos = () => {

  return (
    <>
      <Header />

      <main style={{ backgroundImage: `url(${bg_image})` }}>
      <div className= "parent">
        <div className= "div1">
            <Card valueRestaurant="Esquina del Paisa Fiatú" valueImg= {fritangaImg} valueTitle= "Fritanga Carmona" valueParrafo= "Alta cantidad de proteína, con grasa extra para recargar el cuerpo después de un baño en el río." valuePrecio= "$7.500"/>
        </div>
        <div className="div2">
            <h1 className="h1Ali" style={{ color: "white" }}>¿Antojo de algo?</h1>
            <p  className="pAlimen"style={{ color: "white" }}>¡Prueba la esencia de Pueblito Pance con las comidas y bebidas favoritas de sus visitantes!</p>
        </div>
        <div className="div3">
          <b className="bEspacio bAma">COMIDA RAPIDA</b><b className="bEspacio bRojo">SUSHI</b><b className="bAma">PIZZA</b><br/>
          <b className="bEspacio bAma">EMBUTIDOS</b><b className="bEspacio bRojo">OBLEAS</b>
          <b className="bEspacio bRojo">CARNE LLANERA</b><b className="bRojo">AREPA</b>
        </div> 
        <div className="div4"> 
              <Card valueRestaurant="Restaurante Tres Molinos" valueImg= {sancochoImg} valueTitle= 'Sancocho "Pacatá"' valueParrafo= "Cuando nos contaron que el puesto de Doña Jacinta había cerrado, conmemoramos su mejor plato." valuePrecio= "$19.000"/>
        </div>  
      </div>
            <Footer />
      </main>


    </>
  )
}