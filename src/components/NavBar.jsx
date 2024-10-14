import React from 'react'
import CartWidget from './CartWidget'
import "../assets/carrito.png"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className="navbar">
        <li> <NavLink className="activo" to={"/"}> 
              Inicio 
          </NavLink></li>
        <li> <NavLink className="activo" to={"/category/IPhone"}>
              IPhone 
          </NavLink> </li>
        <li> <NavLink className="activo" to={"/category/Samsung"}>
            Samsung
        </NavLink></li>
        <li><NavLink className="activo" to={"/category/Google"}>
            Google
          </NavLink></li>
        <li><NavLink className="activo" to={"/category/Motorola"}>
            Motorola
        </NavLink></li>
        
        <CartWidget ImgCart = "./assets/carrito.png"/>

    </ul>
  )
}

export default NavBar
