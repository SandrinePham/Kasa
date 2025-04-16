import React from "react";
import "./ratingStars.scss";
import PropTypes from "prop-types";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - Math.ceil(rating);

  const renderStars = () => {
    let stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return <div className="rating-stars">{renderStars()}</div>;
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingStars;
