import React from 'react';
import './FotosPerfil.css';

import lapiz from '../../../assets/lapiz.png';
import flechaIzqui from '../../../assets/flechaIzqui.png';
import flechaDere from '../../../assets/flechaDere.png';

const FotosPerfil = ({ porcentajeCarga }) => {

  return (
    <div className="fotos-perfil-container">
      <div className="icono">
        <img className="lapiz-icon" src={lapiz} alt="Ícono de lápiz" />
      </div>
      <div className="botones">
        <img className="flecha-izquierda" src={flechaIzqui} alt="Flecha izquierda" />
        <img className="flecha-derecha" src={flechaDere} alt="Flecha derecha" />
      </div>
      <button className="boton-elegir-perfil">Elegir Perfil</button>
      <div className="barra-carga-container">
        <div className="barra-carga">
          <div className="carga-completa" style={{ width: `${porcentajeCarga}%` }} ></div>
        </div>
        <div className="redondela" style={{ right: `calc(100% - ${porcentajeCarga}%)` }} ></div>
      </div>
    </div>
  );
};

export default FotosPerfil;