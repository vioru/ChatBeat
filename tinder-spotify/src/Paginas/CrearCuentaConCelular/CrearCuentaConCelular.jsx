import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './CrearCuentaConCelular.css';

const CrearCuentaConCelular = () => {
    const [step, setStep] = useState(1);

    const handleContinue = () => {
        setStep(step + 1);
    };

    const renderStep1 = () => (
        <div className="crear-cuenta-con-celular-container">
            <img src={logo} alt="Logo" className="crear-cuenta-con-celular-logo" />
            <h1>Crear cuenta</h1>
            <h2>Ingresa tu número de celular</h2>
            <div className="input-group">
                <label htmlFor="pais">País:</label>
                <input type="text" id="pais" />
            </div>
            <div className="input-group">
                <label htmlFor="numero">Número de celular:</label>
                <input type="text" id="numero" />
            </div>
            <p>Al hacer clic en continuar, te enviaremos un mensaje de texto con un código de verificación. Se pueden aplicar tarifas de mensajes y datos. El número verificado se puede usar para iniciar sesión.</p>
            <button onClick={handleContinue}>Continuar</button>
        </div>
    );

    const renderStep2 = () => (
        <div className="crear-cuenta-con-celular-container">
            <img src={logo} alt="Logo" className="crear-cuenta-con-celular-logo" />
            <h1>Crear cuenta</h1>
            <h2>Ingresa tu código</h2>
            <input type="text" placeholder="Ingresa tu código aquí" />
            <p><span>Cambiar número de teléfono</span> - <span>Reenviar</span></p>
            <button onClick={handleContinue}>Continuar</button>
        </div>
    );

    return (
        <div>
            {step === 1 ? renderStep1() : renderStep2()}
        </div>
    );
};

export default CrearCuentaConCelular;