import React, { useState, useEffect } from "react";
import "./Carousel.scss";

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
    <div className="carouselContainer">
      {/* Bouton pour aller à l'image précédente */}
      {pictures.length > 1 && (
        <button className="carouselButton left" onClick={prevSlide}>
          ❮
        </button>
      )}

      {/* Image actuelle */}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carouselImage"
      />

      {/* Numérotation des images */}
      {pictures.length > 1 && (
        <div className="counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}

      {/* Bouton pour aller à l'image suivante */}
      {pictures.length > 1 && (
        <button className="button right" onClick={nextSlide}>
          ❯
        </button>
      )}
    </div>
  );
};

export default Carousel;
