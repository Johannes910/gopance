import React from 'react';
import { useState } from "react";
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/bgimageiniciosesion.png"
import gopancelogo from "../../assets/images/gopancelogo.png"
import { useNavigate } from "react-router-dom";
import "../../css/login.css"
import {collection, getDocs} from "firebase/firestore";
import {useEffect} from 'react';
import {db, app} from '../../firebase/firebaseConfig';

export const Login = () => {


  //TEST DE CONECCION CON LA BASE DE DATOS

  // useEffect(() =>{
  //   const obtenerDatos = async() =>{
  //     const datos = await getDocs(collection(db,'usuarios'));
  //     console.log(datos.docs[0].data());
  //   }

  //   obtenerDatos();


  // },[]);


  // const [mail, setMail] = useState("")
  // const [passwd, setPasswd] = useState("")

const navigate = useNavigate();

  // const onInputChangeMail = (event) => {
  //   setMail(event.target.value)
  // }

  // const onInputChangePasswd = (event) => {
  //   setPasswd(event.target.value)
  // }

  // const CheckLogin = (event) => {
  //   event.preventDefault();
  //   if (mail == "perafan@hotmail.com" && passwd == "perafan123") {
  //     console.log("Login correcto, ¡hola PERAFÁN!.")
  //     navigate('/pedidos');
  //   }
  //   else {
  //     console.log("Login falso, intenta nuevamente.")
  //     window.alert('Ingreso incorrecto. Usa "perafan@hotmail.com" como correo y "perafan123" como contraseña.')
  //     navigate('/login');
  //   }
  // }



    const rutaRegistrarCliente = () => {
        navigate('/registrarcliente');
    }

    const rutaRegistrarVendedor = () => {
        navigate('/registrarvendedor');
    }

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
    };

  return (
    <>

      <main style={{ backgroundImage: `url(${bg_image})` }}>

        <div className="divcontainer">

          <img src={gopancelogo} position="relative" className="img" />
          <h3>Iniciar sesión</h3>

          <form>
          <div className="form-floating divinputlog">

            <input type="email" className="form-control inputlog" id="floatingInput" placeholder="name@example.com" required />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating divinputlog">
            <input type="password" className="form-control inputlog" id="floatingPassword" placeholder="Password" required />
            <label for="floatingPassword">Password</label>
          </div>
          </form>

          <div className="checkbox mb-3 divinputlog rememberdiv">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <button className="btnlogin" type="submit" >Sign in</button>
          <p className="regisH"> Registrarse como</p>

                    <div className="divbutn btnRegisLog">
                        <button type="button" className="butn" onClick={rutaRegistrarCliente}>Cliente</button><button type="button" className="butn" onClick={rutaRegistrarVendedor}> Vendedor</button>
                </div>
          <div className="parrafo">
            <p className="mt-5 mb-3 text-muted">&copy; 1998–2022</p>
          </div>

        </div>
      </main>

    </>
  )
}