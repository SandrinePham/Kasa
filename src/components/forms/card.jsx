// src/components/Card/Card.jsx
import React from 'react';
import './Card.scss';

const Card = ({ title, cover }) => (
  <div className="card">
    <img src={cover} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default Card;
