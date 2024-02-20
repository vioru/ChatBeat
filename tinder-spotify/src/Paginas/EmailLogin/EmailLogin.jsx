import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'; 
import './EmailLogin.css'; 

const EmailLogin = () => {

  //const navigate = useNavigate(); // Obtener la función de navegación

  const handleContinuarClick = () => {
    // Lógica de autenticación y redirección
    // Por ejemplo, podrías verificar las credenciales aquí

    // Si la autenticación es exitosa, navega al home privado
    //navigate('/home-privado');
  };

  // Si el usuario ha iniciado sesión, redirige al home privado
  /*if (loggedIn) {
    return <Redirect to="/home-privado" />;
  }*/

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
      <Link to="/home-privado" className="email-login-button continuar" onClick={handleContinuarClick}>Continuar</Link>
      <p className="email-login-paragraph">Al hacer clic en continuar, aceptas nuestros Términos y Condiciones. Conoce cómo procesamos tus datos en nuestra className="email-login-link" Política de privacidad y Políticas sobre cookies.</p>
    </form>
  );
};

export default EmailLogin;