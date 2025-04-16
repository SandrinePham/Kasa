import React from "react";
import "./card.scss";
import PropTypes from "prop-types";

const Card = ({ title, cover }) => (
  <div className="card">
    <img src={cover} alt={title} className="imageCard" />
    <h2>{title}</h2>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
export default Card;
