import "../css/header.css"
import defaultpfp from "../assets/images/defaultpfp.png"
import gopancelogo from "../assets/images/gopancelogo.png"
import { Route, Routes, NavLink } from 'react-router-dom'
import { Alimentos } from "../pages/Alimentos/pg_alimentos"
import { Servicios } from "../pages/Servicios/pg_servicios"
import { TusPedidos } from "../pages/TusPedidos/pg_tuspedidos"

export const Header = () => {

  return (

    <>

      <Routes>
        <Route path="alimentos" element={<Alimentos />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="pedidos" element={<TusPedidos />} />
      </Routes>

      <header className="p-3 text-bg-dark header">
        <div className="contai">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <img src={gopancelogo} position="relative" width="120px" height="34px" alt="" className="imglogo" />
              <NavLink className={(args) => `nav-link px-5 linkmenu ${args.isActive ? 'active' : ''} `} to="/">INICIO</NavLink>
              <NavLink className={(args) => `nav-link px-5 linkmenu ${args.isActive ? 'active' : ''} `} to="alimentos">ALIMENTOS</NavLink>
              <NavLink className={(args) => `nav-link px-5 linkmenu ${args.isActive ? 'active' : ''} `} to="servicios">SERVICIOS</NavLink>
              <NavLink className={(args) => `nav-link px-5 linkmenu ${args.isActive ? 'active' : ''} `} to="pedidos">TUS PEDIDOS</NavLink>
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
                <button className="buttonLogoHeader">
                  <img src={defaultpfp} position="relative" width="50px" height="50px" alt="pfp" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

    </>

  )
}