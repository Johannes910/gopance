import React from 'react';
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { BGImage } from "./components/BGImage.jsx"
import { Button } from "./components/Button.jsx"

export const App = () => {

  return (
    <>
      <Header />

      <main>
        <BGImage value='1' />
        <Button />

      </main>

      <Footer />
    </>
  )
}