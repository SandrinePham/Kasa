import React, { useState } from 'react';
import './collapse.scss'; // Assure-toi d'importer ton fichier CSS

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <h3>{title}</h3>
        <button className="collapse-button" onClick={toggleCollapse}>
        {isOpen ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
