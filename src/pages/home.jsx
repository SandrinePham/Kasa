import "./home.scss";
import { useNavigate } from "react-router-dom";
import ImageBody from "../components/forms/ImageBody";
import Card from "../components/forms/Card";
import cardsData from "../../data/data.json";

const Home = () => {
  const navigate = useNavigate();
  const visibleCards = cardsData.slice(0, 6);

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="homeContainer">
      <div>
        <ImageBody
          imageSrc="./assets/images/images/img_home.png"
          title="Chez vous, partout et ailleurs"
        />
      </div>
      <div className="cardContainer">
        {visibleCards.map((card) => (
          <div key={card.id} onClick={() => handleCardClick(card.id)}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
