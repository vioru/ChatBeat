import React from 'react';
import log from '../../../assets/log.png';
import './CrearStep2.css';

const CrearStep2 = ({ handleContinue, handleClose }) => (
  <div className="crear-step2-container">
    <div className="cerrar" onClick={handleClose}>X</div>
    <img src={log} alt="Logo" className="crear-step2-logo" />
    <h1 className="crear-step2-title">Crear cuenta</h1>
    <h2 className="crear-step2-subtitle">Ingresa tu código</h2>
    <input type="text" placeholder="Ingresa tu código aquí" className="crear-step2-input" />
    <p className="crear-step2-paragraph">
      <span className="crear-step2-span">Cambiar número de teléfono</span> - 
      <span className="crear-step2-span">Reenviar</span>
    </p>
    <button onClick={handleContinue} className="crear-step2-button continuar">Continuar</button>
  </div>
);

export default CrearStep2;