import React, { useState } from "react";
import "./collapse.scss";
import PropTypes from "prop-types";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapseContainer">
      <div className="collapseHeader">
        <h4>{title}</h4>
        <button className="button" onClick={toggleCollapse}>
          {isOpen ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-up"></i>
          )}
        </button>
      </div>
      <div className={`content ${isOpen ? "open" : ""}`}>
        {/* Si le contenu est une liste, on l'affiche comme une liste à puces */}
        {Array.isArray(content) ? (
          <div className="equipmentsList">
            {content.map((item, index) => (
              <p key={index}>{item}</p> 
            ))}
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;
