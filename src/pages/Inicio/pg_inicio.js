import React from 'react';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';
import bg_image from "../../assets/images/bgimageinicio.png"
import defaultpfp from "../../assets/images/defaultpfp.png"
import gopancelogo from "../../assets/images/gopancelogo.png"
import { useNavigate } from "react-router-dom";
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import "../../css/chat.css"

export const Inicio = () => {

    const navigate = useNavigate();

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

            <Header />

            <main style={{ backgroundImage: `url(${bg_image})` }}>
                <div className="ini">
                    <img src={gopancelogo} position="relative" /><br /><br />
                    <h1 >¡Tu mejor opción para pedir!</h1>
                    <p >¡Nuestra App permite a todos los caleños disfrutar de la grán variedad de comidas y servicios que existen en Pueblito Pance!</p>



                </div>
            </main>
        </>
    )
}