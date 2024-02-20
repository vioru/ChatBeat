import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

import log from '../../../assets/log.png'
import foto from '../../../assets/foto.png'

const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="logo logo-container">
        <img className="logo-image" src={log} alt="Logo" />
      </div>
      <Link to="/editar-perfil" className="profile-picture profile-picture-container">
        <img className="profile-image" src={foto} alt="Profile" />
      </Link>
      <div className="icons">
        <div className="icon">Icon 1</div>
        <div className="icon">Icon 2</div>
        <div className="icon">Icon 3</div>
        <div className="icon">Icon 4</div>
        <div className="icon">Icon 5</div>
        <div className="icon">Icon 6</div>
      </div>
    </div>
  );
};

export default SideNav;