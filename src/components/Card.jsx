import React from "react";
import "./card.scss";

const Card = ({ title, cover }) => (
  <div className="card">
    <img src={cover} alt={title} className="imageCard" />
    <h2>{title}</h2>
  </div>
);

export default Card;
