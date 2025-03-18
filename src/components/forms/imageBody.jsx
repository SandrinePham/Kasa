import React from 'react';
import './imageBody.scss'; 
import PropTypes from "prop-types";

const ImageBody = ({ imageSrc, title }) => {
  return (
    <div className="imageContainer">
      <img src={imageSrc} alt={title} className="image" />
      <h2 className="title">{title}</h2>
    </div>
  );
};

ImageBody.propTypes = {
  imageSrc: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,    
};

export default ImageBody;
