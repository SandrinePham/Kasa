import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ImageBody from "../components/ImageBody.jsx";
import Card from "../components/Card";
import "./home.scss";
import homeImage from "../assets/images/image_home.png";

const Home = () => {
  const [cardsData, setCardsData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 🔄 Charger les données avec fetch()
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
      })
      .then((data) => {
        setCardsData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  if (error) return <p>Erreur : {error}</p>;
  if (!cardsData.length) return <p>Chargement...</p>;

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
