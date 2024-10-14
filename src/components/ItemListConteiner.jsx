import React, { useEffect, useState } from 'react'
import Mproductos from "../assets/MOCK_DATA.json"
import Itemlist from "./ItemList"
import { useParams } from 'react-router-dom'

const ItemListConteiner = () => {
  const { categoryId } = useParams()
  const [productos, setProducts] = useState([])

  useEffect(()=>{
    let productosFiltro = []
    if(categoryId){
         productosFiltro = Mproductos.filter(producto => producto.marca === categoryId) }
    else{
      productosFiltro = Mproductos
    } 
    setProducts(productosFiltro)
  
  }, [categoryId])

  return <Itemlist productos={ productos }/>  
  }


export default ItemListConteiner
