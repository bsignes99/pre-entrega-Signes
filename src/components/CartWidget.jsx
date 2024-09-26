import React from 'react'
import ImgCart from '../assets/carrito.png'

const CartWidget = (imgCart) => {
  return (
    <>
    <img className='carritoIcono' src={ImgCart} alt="carrito" />
    <span className='contador'> 30 </span>
    </>
  )
}

export default CartWidget
