import React from 'react';
import { Link } from 'react-router-dom';
import celuizq from '../../assets/celuizq.png'
import celuCentro from '../../assets/celuCentro.png'
import celuDer from '../../assets/celuDer.png'
import Nav from '../../Components/Nav/Nav';
import BotonPin from '../Button/BotonPrincipal/BotonPin';
import DescargaApp from '../Seccion/DescargaApp/DescargaApp';
import CardInfe from '../../Components/Cards/CardInfe/CardInfe';
import Fragme from '../Fragme/Fragme';
import Footer from '../../Components/Footer/Footer';

import './Home.css';

const Home = () => {
    return (
        <>  
        <Nav />
        <div className="container"> 
            <div className="card">
            <div className="card-images"> 
                <img src={celuizq} alt="Imagen 1" />
                <img src={celuCentro} alt="Imagen 2" />
                <img src={celuDer} alt="Imagen 3" />
            </div>
            <p className="paragraph">La música une corazones en una conexión perdurable</p> 
            </div>
        </div>
        <div className="boton-container">
            <Link to="crear-cuenta">
              <BotonPin texto="Crear Cuenta" />
            </Link>
        </div>
        <DescargaApp />
        <CardInfe />
        <Fragme />
        <Footer />
      </>
    );
}
  
export default Home;