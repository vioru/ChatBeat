import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import './Seccion.css';
import ImageCards from '../Cards/ImageCards';
import DescargaApp from '../Seccion/DescargaApp/DescargaApp';
import Footer from '../Footer/Footer';

const Seccion = () => (
    <div>
        <div className="seccion">
          <img src={logo} alt="Logo" className="logo-center" />
          <p className="seccion-title">La música une corazones en una conexión perdurable</p>
          <Link to="/crear-cuenta" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button>Crear tu cuenta</button>
          </Link>
          <ImageCards />
        </div>
        <DescargaApp />
        <Footer />
    </div>
  );
  
export default Seccion;