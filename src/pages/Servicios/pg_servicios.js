import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/bgimage1.png"
import defaultpfp from "../../assets/images/defaultpfp.png"
import { Footer } from '../../components/Footer.jsx';
import { Card } from '../../components/Card.jsx';
import fritangaImg from '../../assets/images/3.png'
import sancochoImg from '../../assets/images/4.png'
import '../../css/servicios.css'

export const Servicios = () => {

  return (
    <>
      <Header />

      <main style={{ backgroundImage: `url(${bg_image})` }}>
      <div className= "parentSer">
        <div className= "div1Ser">
            <Card valueRestaurant="Picoloro Ecoturismo" valueImg= {fritangaImg} valueTitle= "Caminata en Picoloro" valueParrafo= "Maravillosa caminata guiada con almuerzo y desayuno incluido, con transporte hasta Pueblo Pance." valuePrecio= "$70.500"/>
        </div>
        <div className="div2Ser">
            <h1 className="h1Ali h1Ser" style={{ color: "white" }}>¿Qué hay para hacer hoy?</h1>
            <p  className="pAlimen p1Ser"style={{ color: "white" }}>Aprovecha nuestras recomendaciones y los productos más solicitados. ¡Abajo puedes observar todos los servicios disponibles!</p>
        </div>
        <div className="div3Ser">
          <b className="bEspacio bAma">CAMINATAS</b><b className="bEspacio bRojo">RELAJACIÓN</b><b className="bAma">CAMPING</b><br/>
          <b className="bEspacio bAma centereco">ECOSENDERISMO</b><b className="bEspacio bRojo">BALNEARIOS</b><br/>
          <b className="bEspacio bRojo centereco2">GLAMPING</b><b className="bRojo">HOTELERIA</b>

        </div> 
        <div className="div4Ser"> 
              <Card valueRestaurant="Wellness Spa" valueImg= {sancochoImg} valueTitle= 'Spa Shiva Inu"' valueParrafo= "Aprovechamos lo mejor de la religión oriental para traerte la máxima relajación de Pueblito Pance." valuePrecio= "$120.000"/>
        </div>  
      </div>
            <Footer />
      </main>


    </>
  )
}