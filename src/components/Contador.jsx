import React, {useState} from "react";

function Contador({ ContadorCambios }) {
  const [contador, setcontador] = useState(1); 

  const incrementar = () => {
    setcontador((prev) => {
      const nuevocontador = prev + 1;
      ContadorCambios(nuevocontador); 
      return nuevocontador;
    });
  };

  const decrementar = () => {
    if (contador > 1) {
      setcontador((prev) => {
        const nuevocontador = prev - 1;
        ContadorCambios(nuevocontador);
        return nuevocontador;
      });
    }
  };
  const sumar = () => setcontador(contador + 1);
  const restar = () => setcontador(contador - 1);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3> {contador}</h3>
      <button onClick={restar} className="btn-contador" style={{ margin: '0 50px', padding: '10px 20px' }}>
        -
      </button>
      <button className="btn-contador" onClick={sumar} style={{ margin: '0 50px', padding: '10px 20px' }}>
        +
      </button>
    </div>
  );
}

export default Contador;