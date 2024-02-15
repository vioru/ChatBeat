import React from 'react';
import './NuevaContraseña.css';

const NuevaContraseña = () => {
    return (
        <div className="nueva-contraseña-container">
            <h1>Nueva Contraseña</h1>
            <div className="input-container">
                <label>Ingresa tu código</label>
                <input type="text" placeholder="Código" />
            </div>
            <div className="input-container">
                <label>Nueva Contraseña</label>
                <input type="password" placeholder="Nueva Contraseña" />
            </div>
            <div className="input-container">
                <label>Repetir Contraseña</label>
                <input type="password" placeholder="Repetir Contraseña" />
            </div>
            <p>¿No recibiste el código? <span>Reenviar código</span></p>
                <button className="continuar">Continuar</button>
            <p>Al hacer clic en continuar, aceptas nuestros Términos y Condiciones. Conoce cómo procesamos tus datos en nuestra Política de privacidad y Políticas sobre cookies.</p>
        </div>
    );
};

export default NuevaContraseña;