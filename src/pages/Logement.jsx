import { useParams, Navigate } from "react-router-dom";
import Carousel from "../components/Carousel.jsx";
import Collapse from "../components/Collapse";
import data from "../../data/data.json";
import "./logement.scss";
import RatingStars from "../components/RatingStars";

const Logement = () => {
  const { id } = useParams(); // Récupère l'id de l'URL
  const apartment = data.find((item) => item.id === id);

  // Si aucun logement correspondant, redirection vers la page d'erreur
  if (!apartment) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="logementContainer">
      <Carousel pictures={apartment.pictures} />
      <div className="logementInfos">
        <div className="logementDescription">
          <div className="title">
            <h5>{apartment.title}</h5>
            <p className="location">{apartment.location}</p>
            <div className="tagsContainer">
              {apartment.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="value">
            <div className="host">
              <p>
                {" "}
                {apartment.host.name.split(" ")[0]} <br />
                {apartment.host.name.split(" ")[1]}
              </p>
              <img
                src={apartment.host.picture}
                alt={apartment.host.name}
                className="picture"
              />
            </div>
            <RatingStars rating={apartment.rating} /> {}
          </div>
        </div>
        <div className="logementDetails">
          <div className="section">
            <Collapse title="Description" content={apartment.description} />
          </div>
          <div className="section">
            <Collapse title="Équipements" content={apartment.equipments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logement;
