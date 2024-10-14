import React from "react";
import { Link, NavLink } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="card">
            <img src={item.image} />
            <h2>{item.marca} {item.modelo}</h2>
            <span>${item.price}</span>
            <NavLink to={`/detail/${item.id}`}>
            <button className="btn"> Ver más</button>
            </NavLink>
        
        </div>
    )
}

export default Item