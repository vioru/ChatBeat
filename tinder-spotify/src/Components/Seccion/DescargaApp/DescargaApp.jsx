import React from 'react';
import './DescargaApp.css';

import AppStore from '../../../assets/AppStore.png'
import GooglePlay from '../../../assets/GooglePlay.png'

const DescargaApp = () => {
  return (
    <div className="descarga-app">
      <h1 className="descarga-title">¡Descarga la app!</h1>
      <div className="logos">
        <img src={AppStore} alt="App Store" />
        <img src={GooglePlay} alt="Google Play" />
      </div>
      <p className="descripcion-app-p">
        Chatify es una plataforma diseñada para ayudarte a encontrar conexiones profundas en el amor o la amistad, conectándote con personas que comparten tus gustos musicales. Al identificar afinidades musicales, facilitamos la creación de relaciones auténticas y significativas. Ya sea que estés buscando un compañero de conciertos o alguien con quien compartir tus canciones favoritas, nuestra aplicación te ofrece la oportunidad de conectar con personas que comparten tu pasión por la música. ¡Únete a nuestra comunidad y comienza a descubrir nuevas conexiones emocionantes hoy mismo!
      </p>
    </div>
  );
};

export default DescargaApp;