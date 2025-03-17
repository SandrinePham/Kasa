import React from 'react';
import './errorPage.scss';  // On ajoutera du style dans ce fichier CSS

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="go-home">Retourner sur la page d'accueil</a>
    </div>
  );
};

export default ErrorPage;
