import '../css/footer.css'
import logoImg from '../assets/images/gopancelogo2.png'
import carrito from '../assets/images/carrito.png'


export const Footer = () => {

  return (

    <>
  <footer className="footerdiv">
    <div className="parentFoo">
<div className="div1Foo"><img src={carrito} className="imgCarrito"></img><b className="bTatiana">Feliz compra, Tatiana</b></div>
<div className="div2Foo"><img src={logoImg} className="imgLogo"></img> </div>
<div className="div3Foo"><p className="pbalance">Tu balance <br/><b className= "bdinero">$253.000</b></p> </div>

</div>


  </footer>


</>

  )
}