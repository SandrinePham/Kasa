import React, { useState, useEffect } from 'react';
import './carousel.scss';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Aller à l'image suivante
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };
  
    // Aller à l'image précédente
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="carousel-container">
        {/* Bouton pour aller à l'image précédente */}
        {pictures.length > 1 && (
          <button className="carousel-button left" onClick={prevSlide}>
            ❮
          </button>
        )}
  
        {/* Image actuelle */}
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />

        {/* Numérotation des images */}
      {pictures.length > 1 && (
        <div className="carousel-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
  
        {/* Bouton pour aller à l'image suivante */}
        {pictures.length > 1 && (
          <button className="carousel-button right" onClick={nextSlide}>
            ❯
          </button>
        )}
  
      </div>
    );
  };
  
  export default Carousel;