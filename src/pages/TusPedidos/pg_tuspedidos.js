import React from 'react';
import { Header } from "../../components/Header.jsx"
import { BGImage } from "../../components/BGImage.jsx"
import { TextInput } from "../../components/TextInput.jsx"
import bg_image from "../../assets/images/bgimage1.png"
import { Footer } from '../../components/Footer.jsx';
import { ShopList } from '../../components/ShopList.jsx';
import '../../css/pedidos.css'
import mapaejemplo from '../../assets/images/mapaEjemplo.png'

export const TusPedidos = () => {

    return (
        <>
            <Header />

            <main className="mainPed">
                <br />
                <ShopList />
                <div className="parentPe divPago">\

                    <div className="div1Pe"> <img src={mapaejemplo} className="mapaImg"></img><b className="bDire">Buscar por dirección</b>

                        <div className="form-floating divInputPe">
                            <input type="text" className="form-control inputDire" id="floatingDirePe" placeholder="DirePe" />
                            <label for="floatingPassword">Dirección de destino</label>
                        </div>
                    </div>
                    <div className="div2Pe">
                        <b className="ptotal">$165.000</b>
                        <button className="btnPagos" type="submit">Tarjeta o PSE</button>

                        <button className="btnPagos" type="submit">Efectivo</button> </div>




                </div>

            </main>

            <Footer />
        </>
    )
}