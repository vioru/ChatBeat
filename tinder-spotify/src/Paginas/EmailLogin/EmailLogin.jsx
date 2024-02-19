import React from 'react';
import { Link } from 'react-router-dom'; 
import './EmailLogin.css'; 

const EmailLogin = () => {
  return (
    <form className="email-login-container">
      <h1 className="email-login-title">Iniciar Sesión</h1>
      <div className="input-container">
        <label className="email-login-label">Email</label>
        <input className="email-login-input" type="email" placeholder="Email" />
        <label className="email-login-label">Password</label>
        <input className="email-login-input" type="password" placeholder="Password" />
      </div>
      <Link to="/recuperar-contraseña" className="email-login-link">¿Olvidaste tu contraseña?</Link>
      <button className="email-login-button continuar">Continuar</button>
      <p className="email-login-paragraph">Al hacer clic en continuar, aceptas nuestros Términos y Condiciones. Conoce cómo procesamos tus datos en nuestra className="email-login-link" Política de privacidad y Políticas sobre cookies.</p>
    </form>
  );
};

export default EmailLogin;