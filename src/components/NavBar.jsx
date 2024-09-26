import React from 'react'
import CartWidget from './CartWidget'
import "../assets/carrito.png"


const NavBar = () => {
  return (
    <ul className="navbar">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Accesorios</li>
        <li>Sucursales</li>
        <CartWidget ImgCart = "./assets/carrito.png"/>

    </ul>
  )
}

export default NavBar
