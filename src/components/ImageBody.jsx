import React from "react";
import "./imageBody.scss";
import PropTypes from "prop-types";

const ImageBody = ({ imageSrc, title }) => {
  return (
    <div className="imageContainer">
      <img src={imageSrc} alt={title} className="imageBody" />
      <h1 className="title">{title}</h1>
    </div>
  );
};

ImageBody.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageBody;
