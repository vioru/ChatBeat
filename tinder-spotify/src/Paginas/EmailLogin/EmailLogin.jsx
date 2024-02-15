import React from 'react';
import { Link } from 'react-router-dom'; 
import './EmailLogin.css'; 

const EmailLogin = () => {
  return (
    <div className="email-login-container">
      <h1>Iniciar Sesión</h1>
      <div className="input-container">
        <label>Email</label>
        <input type="email" placeholder="Correo Electrónico" />
        <label>Password</label>
        <input type="password" placeholder="Contraseña" />
      </div>
        <Link to="/recuperar-contraseña">¿Olvidaste tu contraseña?</Link>
        <button className='continuar'>Continuar</button>
      <p>Al hacer clic en continuar, aceptas nuestros <Link to="/terms">Términos y Condiciones</Link>. Conoce cómo procesamos tus datos en nuestra <Link to="/privacy-policy">Política de privacidad</Link> y Políticas sobre cookies.</p>
    </div>
  );
};

export default EmailLogin;