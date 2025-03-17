import React from "react";
import ImageBody from "../forms/imageBody";
import Card from "../forms/card";
import "./body.scss";
import cardsData from "../../../data/data.json"; // Import du fichier JSON

const Body = () => {
    const visibleCards = cardsData.slice(0, 6);
  return (
    <>
    <div className="body">
    <div>
      <ImageBody imageSrc="/assets/images/images/img_home.png" title="Chez vous, partout et ailleurs" />
    </div>
      <div className="body-container">
        {visibleCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>{" "}
    </div>
    </>
  );
};

export default Body;
