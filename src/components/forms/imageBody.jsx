// src/components/ImageWithTitle.jsx
import React from 'react';
import './imageBody.scss'; // Importer le fichier CSS pour le style
import PropTypes from "prop-types";

const ImageBody = ({ imageSrc, title }) => {
  return (
    <div className="image-container">
      <img src={imageSrc} alt={title} className="image" />
      <h2 className="title">{title}</h2>
    </div>
  );
};

ImageBody.propTypes = {
  imageSrc: PropTypes.string.isRequired, // L'image est obligatoire
  title: PropTypes.string.isRequired,    // Le titre est obligatoire
};

export default ImageBody;
