import React, { useEffect, useState } from 'react'
import productos from "../assets/MOCK_DATA.json"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailConteiner = () => {
    const[producto, setProducto]= useState()
    const {id} = useParams()

    useEffect(() => {
        const producto = productos.find(productToFind => productToFind.id === Number(id))
        setProducto(producto)
    }, [id])
    
    return (producto && <ItemDetail product={producto}/>)
}

export default ItemDetailConteiner