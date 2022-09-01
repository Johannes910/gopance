import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavItem, NavLink,} from "reactstrap";

function NavHeader() {
 
  return (
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active>
          Inicio
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Inicio
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Servicios</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Tus productos</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Usuario
        </NavLink>
      </NavItem>
    </Nav>
  );

}

export default NavHeader;
