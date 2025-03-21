import React from "react";
import "./card.scss";

const Card = ({ title, cover }) => (
  <div className="card">
    <img src={cover} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default Card;
