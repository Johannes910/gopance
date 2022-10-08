import React from 'react';
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';
import bg_image from "../../assets/images/bgimageinicio.png"
import gopancelogo from "../../assets/images/gopancelogo.png"
import { useNavigate } from "react-router-dom";

export const Inicio = () => {

    const navigate = useNavigate();

    const rutaRegistrarCliente = () => {
        navigate('/registrarcliente');
    }

    const rutaRegistrarVendedor = () => {
        navigate('/registrarvendedor');
    }

    return (
        <>
            <Header />

            <main style={{ backgroundImage: `url(${bg_image})` }}>
                <div className="ini">
                    <img src={gopancelogo} position="relative" /><br /><br />
                    <h1 >¡Tu mejor opción para pedir!</h1>
                    <p >Nuestra App permite a todos los caleños disfrutar de la grán variedad de comidas y servicios que existen en Pueblito Pance!</p>
                    <h2> Ingresa como</h2>

                    <div className="divbutn">
                        <button type="button" className="butn" onClick={rutaRegistrarCliente}>Cliente</button><button type="button" className="butn" onClick={rutaRegistrarVendedor}> Vendedor</button>
                    </div>
                </div>
            </main>
        </>
    )
}