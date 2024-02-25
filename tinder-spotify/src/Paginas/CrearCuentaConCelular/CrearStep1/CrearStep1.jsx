import React from 'react';
import log from '../../../assets/log.png';
import './CrearStep1.css';

const CrearStep1 = ({ handleContinue, handleClose }) => (
  <div className="crear-step1-container">
    <div className="cerrar" onClick={handleClose}>X</div> 
    <img src={log} alt="Logo" className="crear-step1-logo" />
    <h1 className="crear-step1-title">Crear cuenta</h1>
    <h2 className="crear-step1-subtitle">Ingresa tu número de celular</h2>
    <div className="crear-step1-input-group">
      <label htmlFor="pais" className="crear-step1-label">País:</label>
      <input type="text" id="pais" className="crear-step1-input" />
    </div>
    <div className="crear-step1-input-group">
      <label htmlFor="numero" className="crear-step1-label">Número de celular:</label>
      <input type="text" id="numero" className="crear-step1-input" />
    </div>
    <p className="crear-step1-paragraph">Al hacer clic en continuar, te enviaremos un mensaje de texto con un código de verificación. Se pueden aplicar tarifas de mensajes y datos. El número verificado se puede usar para iniciar sesión.</p>
    <button onClick={handleContinue} className="crear-step1-button continuar">Continuar</button>
  </div>
);

export default CrearStep1;