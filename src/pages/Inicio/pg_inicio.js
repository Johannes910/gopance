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
                    <h2> Registrarse como</h2>

<<<<<<< HEAD

=======
                    <div className="divbutn">
                        <button type="button" className="butn" onClick={rutaRegistrarCliente}>Cliente</button><button type="button" className="butn" onClick={rutaRegistrarVendedor}> Vendedor</button>
                        <Widget
                            handleNewUserMessage={handleNewUserMessage}
                            profileAvatar={gopancelogo}
                            title="¡Hola de parte de GoPance!"
                            subtitle="Contacta a uno de nuestros asesores"
                            profileClientAvatar={defaultpfp}
                            emojis={true}
                        />
                    </div>
>>>>>>> parent of 75b1b95 (Merge pull request #15 from Johannes910/Johannes)
                </div>
            </main>
        </>
    )
}