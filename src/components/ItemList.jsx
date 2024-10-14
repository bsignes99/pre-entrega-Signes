import React from "react";
import Item from "./Item";
import "../global/style.css"

const ItemList = ({ productos }) => {
    return (
        <div className="paginas-gral">
            {productos.map((producto)=> {
                return(
                    <Item item={ producto } key={producto.id}/>
                )
            })}
        </div>
    )
}

export default ItemList