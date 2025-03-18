import React from "react";
import Card from "../forms/Card";
import "./body.scss";
import cardsData from "../../../data/data.json"; 
import ImageBody from "../forms/ImageBody";

const Body = () => {
    const visibleCards = cardsData.slice(0, 6);
  return (
    <>
    <div className="body">
    <div>
      <ImageBody imageSrc="/assets/images/images/img_home.png" title="Chez vous, partout et ailleurs" />
    </div>
      <div className="bodyContainer">
        {visibleCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>{" "}
    </div>
    </>
  );
};

export default Body;
