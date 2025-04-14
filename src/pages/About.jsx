import React from "react";
import ImageBody from "../components/ImageBody.jsx";
import Collapse from "../components/Collapse";
import "./about.scss";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div>
          <ImageBody imageSrc="/src/assets/images/image_about.png" title=" " />
        </div>

        <div>
          <div className="section">
            <Collapse
              title="Fiabilité"
              content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
          </div>

          <div className="section">
            <Collapse
              title="Respect"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
          </div>

          <div className="section">
            <Collapse
              title="Service"
              content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
            />
          </div>

          <div className="section">
            <Collapse
              title="Sécurité"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
