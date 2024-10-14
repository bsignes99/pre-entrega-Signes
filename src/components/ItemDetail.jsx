import React from "react"
import Contador from "./Contador"
import {NavLink} from "react-router-dom"
import { useState } from "react"

const ItemDetail = ({ product }) => {
  const [cargando, setCargando] = useState(false);
  const [msj, setMsj] = useState("");
  const [contador, setContador] = useState(1);

  const consultar = (contador) => {
    setCargando(true);
    setMsj("Estamos consultando el stock...");

    return new Promise((res, rej) => {
      setTimeout(() => {
        if (contador <= Number(product.stock)) {
          res("Stock disponible");
        } else {
          rej("No hay suficiente stock disponible");
        }
      }, 4000);
    });
  };

  const SynkConsultarStock = async () => {
    try {
      const resultado = await consultar(contador);
      setMsj(resultado);
    } catch (error) {
      setMsj(error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <div className="card-detail">
        <img src={product.image} alt={`${product.marca} ${product.modelo}`} />
        <h2>
          {product.marca} {product.modelo}
        </h2>
        <span>${product.price}</span>
        <Contador contadorCambios={setContador} />
        <NavLink>
          <button className="btn-stock" onClick={SynkConsultarStock}>
            Consultar Stock
          </button>
        </NavLink>
      </div>
      <div className="card-descripcion">
        <p>
          Descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vel ut iste culpa eos iusto aspernatur accusantium esse, illo quas
          eveniet! Similique alias, neque earum excepturi officiis quisquam et
          iure natus.
        </p>
        <p>
          Especificaciones técnicas: Lorem ipsum dolor sit amet. Earum quasi
          eligendi a, hic explicabo deserunt perspiciatis laborum voluptatem
          nisi.
        </p>
      </div>
      <div className="promesa">
      {cargando && <p>{msj}</p>}
      {!cargando && msj && <p>{msj}</p>}
      </div>
    </div>
  );
};

export default ItemDetail;
