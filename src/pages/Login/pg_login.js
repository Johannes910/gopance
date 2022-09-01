import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import { Button } from "../../components/Button.jsx"



export const Login = () => {

  return (
    <>

      <Header />
      <main>
      <h1 style={{color:"white"}}>Iniciar Sesión</h1><br/>
      <TextInput/><br/>
      <TextInput/><br/>
      <Button/>

      <BGImage value="1"/>
      </main>
      
    </>
  )
}