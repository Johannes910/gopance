import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/bgimagecrearproducto.png"
import defaultpfp from "../../assets/images/defaultpicture.jpg"
import { ImageSelector } from '../../components/ImageSelector.jsx';
import '../../css/crearP.css'


export const CrearProducto = () => {

 return (
  <>
  <Header />


  <main style={{ backgroundImage: `url(${bg_image})` }}>
  <div className="h1Cre">
    <h1 style={{ color: "white" }} >Crear producto</h1><br />
  </div>
 
<div class="parentCre">
<div class="div1Cre"> 

 <div className="divcontainerRe">



  <div className="form-floating divinputcre">
  <input type="text" className="form-control inputcre" id="floatingName" placeholder="Name"/>
  <label for="floatingPassword">Nombre del producto</label>
  </div>
  <div className="form-floating divinputcre">
  <input type="email" className="form-control inputcre" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Descripción del producto</label>
  </div>
  <div className="form-floating divinputcre">
  <input type="number" className="form-control inputcre" id="floatingPrePu" placeholder="Precio"/>
  <label for="floatingPassword">Precio del producto</label>
  </div>

  <div className="form-floating divinputcre">
  <input type="text" className="form-control inputcre" id="floatingAddress" placeholder="Address"/>
  <label for="floatingPassword">Cantidad disponible</label>
  </div>

  <form className="formPu">
  <b>Elige el tipo de producto</b><br/>
  <input type="checkbox" name="vehicle1" value="Bike"/> Alimento<br/>
  <input type="checkbox" name="vehicle2" value="Car"/>Servicio
  </form>
  </div>
</div>
<div class="div2Cre">  
    
    
      <img src={defaultpfp} position="relative" width="300px" height="300px" alt="pfp" /> 
     

      <div className="imageSelectorPu">
      <ImageSelector />
      </div> 
 

  </div>




  </div>


 


  <button className="btnregisterPu" type="submit">Publicar producto</button>

  </main>
  </>
  )
}