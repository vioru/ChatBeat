import React from 'react';
import { Link } from 'react-router-dom';
import './RecuperarContraseña.css'; 

const RecuperarContraseña = () => {
    return (
        <div className="recuperar-contraseña-container">
            <h1>Recuperar Contraseña</h1>
            <p>A continuación ingresa el correo con que te registraste para enviarte un código con el cual puedes reestablecer tu contraseña.</p>
            <div className="input-container">
                <label>Ingresa tu Email</label>
                <input type="email" placeholder="Correo Electrónico" />
            </div>
            <p>¿No recibiste el código? <span>Reenviar código</span></p>
            <Link to="/nueva-contraseña">
                <button className="continuar">Continuar</button>
            </Link>
            <p>Al hacer clic en continuar, aceptas nuestros <Link to="/terms">Términos y Condiciones</Link>. Conoce cómo procesamos tus datos en nuestra <Link to="/privacy-policy">Política de privacidad</Link> y Políticas sobre cookies.</p>
        </div>
    );
};

export default RecuperarContraseña;