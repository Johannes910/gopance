import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/RegistroVededor.png"
import defaultpfp from "../../assets/images/defaultpfp.png"
import { ImageSelector } from '../../components/ImageSelector.jsx';
import '../../css/registro.css'
import {collection, getDocs, getFirestore, addDoc, doc, deleteDoc, getDoc, setDoc} from "firebase/firestore";
import {db, app} from '../../firebase/firebaseConfig';
import { useState } from "react";


export const RegistroVendedor = () => {

  const initialStateValues = {correo:'',contrasenia: '',direccion:'',nombre_empresa:'', tipo:'vendedor'};

  const [registro, setRegistro] = useState(initialStateValues);

  const capturarInputs=(e) =>{
    const{name,value}= e.target;
    setRegistro({...registro,[name]:value});
    console.log(registro);
  }

  const addVendedorDb = async(e) =>{
    e.preventDefault();
    try {
      await addDoc(collection(db,'usuarios'),{
        ...registro
      })
      window.alert('Registro exitoso!.')
    } catch (error) {
      console.log(error);
    }
    setRegistro({...initialStateValues});
  }


 return (
  <>



  <main style={{ backgroundImage: `url(${bg_image})` }}>
  <div className="h1">
    <h1 style={{ color: "white" }} >Registrarse como vendedor</h1><br />
  </div>
 


  <div className="wrapper">

  <div className="two imageSelector">
  <ImageSelector />
  </div> 
  <p>Click en el icono para subir una imagen.</p>
  </div>
  <div className="divcontainerRe">


  <form onSubmit={addVendedorDb}>
  <div className="form-floating divinputreg">
  <input type="text" className="form-control inputreg" id="floatingName" placeholder="Name" name="nombre_empresa" onChange={capturarInputs} required/>
  <label for="floatingPassword">Nombre de la empresa</label>
  </div>
  <div className="form-floating divinputreg">
  <input type="email" className="form-control inputreg" id="floatingInput" placeholder="name@example.com" name="correo" onChange={capturarInputs} required/>
  <label for="floatingInput">Correo electrónico</label>
  </div>
  <div className="form-floating divinputreg">
  <input type="password" className="form-control inputreg" id="floatingPassword" placeholder="Password" name="contrasenia" onChange={capturarInputs} required/>
  <label for="floatingPassword">Contraseña</label>
  </div>

  <div className="form-floating divinputreg">
  <input type="text" className="form-control inputreg" id="floatingAddress" placeholder="Address" name="direccion" onChange={capturarInputs} required/>
  <label for="floatingPassword">Dirección de la empresa</label>
  </div>


  <button className="btnregister" type="submit">Registrarse</button>
  </form>

  </div>



  </main>
  </>
  )
}