import React, { useState, useEffect } from "react";
import "./carousel.scss";
import PropTypes from "prop-types";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

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

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
