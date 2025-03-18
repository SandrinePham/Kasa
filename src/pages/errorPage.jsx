import React from "react";
import "./errorPage.scss";

const ErrorPage = () => {
  return (
    <div className="errorContainer">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="goHome">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default ErrorPage;
