import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Nav.css';

const Navbar = ({ showLoginButton }) => (
    <div className="navbar">
        <div className="left-section">
            <img src={logo} alt="Logo" className="logo" />
            <span>ChatBeat</span>
        </div>
        <div className="middle-section">
            <span>Sobre nosotros</span>
        </div>
        <div className="right-section">
            {showLoginButton && (
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <button>Iniciar Sesión</button>
                </Link>
            )}
        </div>
    </div>
);

export default Navbar;