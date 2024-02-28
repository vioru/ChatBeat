import React from 'react';
import './dropdown.css';

import log from '../../../assets/log.png';
import foto from '../../../assets/foto.png';
import configuracion from '../../../assets/configuracion.png';
import corazonb from '../../../assets/corazonb.png';
import chat from '../../../assets/chat.png';
import musicb from '../../../assets/musicb.png';
import homeb from '../../../assets/homeb.png';

const dropdown = ({ onCloseDropdown }) => {

    const handleCloseButtonClick = () => {
        onCloseDropdown();
    };
    
  return (
    <>
        <div className="dropdown-container">
            <div className="header">
                <img src={log} alt="Main Icon" />
                <h2>ChatBeat</h2>
                <button className="close-button" onClick={handleCloseButtonClick}>x</button>
            </div>
            <div className="profile">
                <img src={foto} alt="Profile" />
                <p>Alberto Perez</p>
            </div>
            <div className="menu-item">
                <img src={chat} alt="Icon3" />
                <p>Chat</p>
            </div>
            <div className="menu-item">
                <img src={configuracion} alt="Icon1" />
                <p>Configuración</p>
            </div>
            {/* <div className="menu-item">
                <img src={corazonb} alt="Icon2" />
                <p>Matches</p>
            </div> */}
            
            {/* <div className="menu-item">
                <img src={musicb} alt="Icon4" />
                <p>Eventos</p>
            </div> */}
            {/* <div className="menu-item">
                <img src={homeb} alt="Icon5" />
                <p>Inicio</p>
            </div> */}
            <button className="logout-button">Cerrar Sesión</button>
        </div>
    </>
  )
}

export default dropdown;