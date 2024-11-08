import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import {db} from "../firebase/config.js"

const ItemDetailConteiner = () => {
    const[producto, setProducto]= useState()
    const {id} = useParams()

    useEffect(() => {
        (async ()=> {
        
        try{
            const docRef = doc(db, "productos", id)
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()){
                console.log("documet data:", docSnap.data())
                setProducto({...docSnap.data(), id})
            }else {
                console.log("no anda")
            }
        }catch (error){}
    })()

    }, [id])
    
    return (producto && <ItemDetail product={producto}/>)
}

export default ItemDetailConteiner
/*  const producto = producto.find(productToFind => productToFind.id === Number(id))
setProducto(producto)*/