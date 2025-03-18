import React, { useState } from "react";
import "./collapse.scss"; // Assure-toi d'importer ton fichier CSS

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapseContainer">
      <div className="header">
        <h3>{title}</h3>
        <button className="button" onClick={toggleCollapse}>
          {isOpen ? (
            <i className="fas fa-angle-up"></i>
          ) : (
            <i className="fas fa-angle-down"></i>
          )}
        </button>
      </div>
      <div className={`content ${isOpen ? "open" : ""}`}>
        {/* Si le contenu est une liste, on l'affiche comme une liste à puces */}
        {Array.isArray(content) ? (
          <div className="equipmentsList">
            {content.map((item, index) => (
              <p key={index}>{item}</p> // Affiche chaque équipement dans un paragraphe
            ))}
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
