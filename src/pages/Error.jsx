import React from "react";
import "./Error.scss";

const Error = () => {
  return (
    <div className="errorContainer">
      <h3>404</h3>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="goHome">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default Error;
