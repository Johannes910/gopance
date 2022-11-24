import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/RegistroUsuario.png"
import defaultpfp from "../../assets/images/defaultpfp.png"
import { ImageSelector } from '../../components/ImageSelector.jsx';
import { useState } from "react";
import {collection, getDocs, getFirestore, addDoc, doc, deleteDoc, getDoc, setDoc} from "firebase/firestore";
import {useEffect} from 'react';
import {db, app, storage} from '../../firebase/firebaseConfig';
import { setUserId } from 'firebase/analytics';
import userEvent from '@testing-library/user-event';


export const RegistroUsuario = () => {



  const initialStateValues = {correo:'',contrasenia: '',celular:'',nombre:'', tipo:'usuario'};

  const [registro, setRegistro] = useState(initialStateValues);

  const capturarInputs=(e) =>{
    const{name,value}= e.target;
    setRegistro({...registro,[name]:value});
    console.log(registro);
  }

  const addUserDb = async(e) =>{
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
        <div className="h1Us">
          <h1 style={{ color: "white" }} >Registrarse como cliente</h1><br />
        </div>



        <div className="wrapper">
          {/* <div className="one">
            <img src={defaultpfp} position="relative" width="100px" height="100px" alt="pfp" />
          </div> */}

          <div className="two imageSelector">

            <ImageSelector/>

          </div>
        </div>
        <div className="divcontainerRe">


        <form onSubmit={addUserDb}>
          <div className="form-floating divinputreg">
            <input type="text" className="form-control inputreg" id="floatingName" placeholder="Name" name="nombre" onChange={capturarInputs} required />
            <label for="floatingName">Nombre y Apellido</label>
          </div>
          <div className="form-floating divinputreg">
            <input type="email" className="form-control inputreg" id="floatingInput" placeholder="name@example.com" name="correo" onChange={capturarInputs}required />
            <label for="floatingInput">Correo electrónico</label>
          </div>
          <div className="form-floating divinputreg">
            <input type="password" className="form-control inputreg" id="floatingPassword" placeholder="Password" name="contrasenia" onChange={capturarInputs} required/>
            <label for="floatingPassword">Contraseña</label>
          </div>

          <div className="form-floating divinputreg">
            <input type="text" className="form-control inputreg" id="floatingCel" placeholder="Movil" name="celular" onChange={capturarInputs} required/>
            <label for="floatingCel">Celular</label>
          </div>
          <button className="btnregister" type="submit">Registrarse</button>
          </form>
          

        </div>



      </main>
    </>
  )
}