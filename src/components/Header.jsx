import "../css/header.css"
import defaultpfp from "../assets/images/defaultpfp.png"
import gopancelogo from "../assets/images/gopancelogo.png"
import { NavLink } from 'react-router-dom'


export const Header = () => {

  return (

    <>

      <header className="p-3 header">
        <div className="contai">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <img src={gopancelogo} position="relative" width="120px" height="34px" alt="" className="imglogo" />
              <NavLink className={(args) => `nav-link px-5 linkmenu ${args.isActive ? 'active' : ''} `} to="/">INICIO</NavLink>
              <NavLink className={(args) => `nav-link px-5 linkmenu ${args.isActive ? 'active' : ''} `} to="/alimentos">ALIMENTOS</NavLink>
              <NavLink className={(args) => `nav-link px-5 linkmenu ${args.isActive ? 'active' : ''} `} to="/servicios">SERVICIOS</NavLink>
              <NavLink className={(args) => `nav-link px-5 linkmenu ${args.isActive ? 'active' : ''} `} to="/pedidos">TUS PEDIDOS</NavLink>
            </ul>

            <div className="col-lg-4">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="¡Explora todos los productos!" />
                <span className="input-group-btn">
                  <button className="btn butncolor me-5" type="button">BUSCAR</button>
                </span>
              </div>
            </div>

            <div className="text-end">

              <div>
              <NavLink className={(args) => `${args.isActive ? 'active' : ''} `} to="/login"> <img src={defaultpfp} position="relative" width="50px" height="50px" alt="pfp" /></NavLink>
                 

              </div>

            </div>
          </div>
        </div>
      </header>

    </>

  )
}