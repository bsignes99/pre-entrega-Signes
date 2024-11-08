import React, { useEffect, useState } from 'react'
import Itemlist from "./ItemList"
import { useParams } from 'react-router-dom'
import { db } from "../firebase/config"
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListConteiner = () => {
  const { categoryId } = useParams()
  const [productos, setProducts] = useState([])

  useEffect(()=>{
    ;(async()=> {
      try{
            let productosFiltro = []
            if (categoryId){
                const q = query(
                collection(db, "productos"),
                where("marca", "==", categoryId))

                const querySnapshot = await getDocs(q)
                  querySnapshot.forEach((doc) => {
                    productosFiltro.push({id: doc.id, ...doc.data()})
                  })
                  setProducts(productosFiltro)

            }else{
                  const querySnapshot = await getDocs(collection(db, "productos"))
                  querySnapshot.forEach((doc) => {
                    productosFiltro.push({id: doc.id, ...doc.data()})
                  })
                  setProducts(productosFiltro)
                  
                }
      } catch (error){
        console.log(error)
      }   
  })()  
  }, [categoryId])
  
  return (
    <>
      {console.log(productos)} {/* Verifica los datos aquí */}
      <Itemlist productos={productos} />
    </>
  )
  
  }


export default ItemListConteiner
