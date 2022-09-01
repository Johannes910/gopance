import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import { Button } from "../../components/Button.jsx"
import bg_image from "../../assets/images/bgimage1.png"
import { Footer } from '../../components/Footer.jsx';
import { ShopList } from '../../components/ShopList.jsx';

export const TusPedidos = () => {

    return (
        <>
            <Header />

            <main style={{backgroundImage: `url(${bg_image})`}}>

                <ShopList />

            </main>

            <Footer />
        </>
    )
}