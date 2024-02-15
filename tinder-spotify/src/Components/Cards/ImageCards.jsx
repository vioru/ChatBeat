import React from 'react';
import './ImageCards.css';

import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';

const ImageCards = () => {
  return (
    <div className="image-cards-container">
      <div className="image-card">
        <img src={card1} alt="Imagen 1" />
        <p className="card-description">Chatify te permite enviar una canción con tu primer mensaje, rompiendo el hielo de manera original. ¿Listo para conectar a través de la música?</p>
      </div>
      <div className="image-card">
        <img src={card2} alt="Imagen 2" />
        <p className="card-description">Chatify es el lugar perfecto para conectar con personas afines a tus gustos musicales. ¡Descubre nuevas amistades y comparte tu pasión por la música!</p>
      </div>
      <div className="image-card">
        <img src={card3} alt="Imagen 3" />
        <p className="card-description">Coordina fácilmente con otras personas para asistir juntos a los próximos eventos musicales en la ciudad. Ya no tendrás que ir solo a tus conciertos favoritos. ¡Únete a nuestra comunidad y empieza a disfrutar la música en compañía!</p>
      </div>
    </div>
  );
};

export default ImageCards;