import React from "react";
import "./RatingStar.scss";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
  const emptyStars = 5 - Math.ceil(rating); // Nombre d'étoiles vides

  // Fonction pour générer des étoiles en fonction de la note
  const renderStars = () => {
    let stars = [];

    // Ajouter les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    // Ajouter les étoiles vides
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return <div className="rating-stars">{renderStars()}</div>;
};

export default RatingStars;
