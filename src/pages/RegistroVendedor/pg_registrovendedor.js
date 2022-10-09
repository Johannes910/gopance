import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/RegistroVendedor.jpeg"
import defaultpfp from "../../assets/images/defaultpfp.png"
import { ImageSelector } from '../../components/ImageSelector.jsx';
import '../../css/registro.css'


export const RegistroVendedor = () => {

 return (
  <>
  <Header />


  <main style={{ backgroundImage: `url(${bg_image})` }}>
  <div className="h1">
    <h1 style={{ color: "white" }} >Registrarse como vendedor</h1><br />
  </div>
 


  <div className="wrapper">
  <div className="one">
  <img src={defaultpfp} position="relative" width="100px" height="100px" alt="pfp" /> 
  </div>

  <div className="two imageSelector">
  <ImageSelector />
  </div> 
  </div>
  <div className="divcontainerRe">



  <div className="form-floating divinputreg">
  <input type="text" className="form-control inputreg" id="floatingName" placeholder="Name"/>
  <label for="floatingPassword">Nombre de la empresa</label>
  </div>
  <div className="form-floating divinputreg">
  <input type="email" className="form-control inputreg" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Correo electrónico</label>
  </div>
  <div className="form-floating divinputreg">
  <input type="password" className="form-control inputreg" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Contraseña</label>
  </div>

  <div className="form-floating divinputreg">
  <input type="text" className="form-control inputreg" id="floatingAddress" placeholder="Address"/>
  <label for="floatingPassword">Dirección de la empresa</label>
  </div>


  <button className="btnregister" type="submit">Registrarse</button>

  </div>



  </main>
  </>
  )
}