import React from 'react'
import './SeleccionarFotos.css';

const SeleccionarFotos = () => {
  return (
    <>
        <div className="seleccionar-fotos-container">
        <h2 className="titulo-foto">Seleccionar Fotos <span className="cerrar-x">x</span></h2>
        <div className="cuadritos">
            {[1, 2, 3, 4, 5, 6].map(numero => (
            <div key={numero} className="cuadrito"></div>
            ))}
        </div>
        <div className="botones-seleccion">
            <button className="boton-cancelar">Cancelar</button>
            <button className="boton-guardar">Guardar Cambios</button>
        </div>
        </div>

    </>
  )
}

export default SeleccionarFotos;