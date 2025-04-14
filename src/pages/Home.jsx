import { useNavigate } from "react-router-dom";
import ImageBody from "../components/ImageBody.jsx";
import Card from "../components/Card";
import cardsData from "../../data/data.json";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="homeContainer">
      <div>
        <ImageBody
          imageSrc="/src/assets/images/image_home.png"
          title="Chez vous, partout et ailleurs"
        />
      </div>
      <div className="cardContainer">
        {cardsData.map((card) => (
          <div key={card.id} onClick={() => handleCardClick(card.id)}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
