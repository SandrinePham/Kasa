import { useNavigate } from "react-router-dom";
import ImageBody from "../components/ImageBody.jsx";
import Card from "../components/Card";
import cardsData from "../../data/data.json";
import "./home.scss";
import homeImage from "../assets/images/image_home.png"; 

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="homeContainer">
      <div>
        <ImageBody
          imageSrc={homeImage}
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
