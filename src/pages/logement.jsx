import { useParams, Navigate } from "react-router-dom";
import Carousel from "../components/forms/carousel";
import Collapse from "../components/forms/collapse";
import data from "../../data/data.json";
import "./logement.scss";

const Logement = () => {
  const { id } = useParams(); // Récupère l'id de l'URL
  const apartment = data.find((item) => item.id === id);

  // Si aucun logement correspondant, redirection vers la page d'erreur
  if (!apartment) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="apartment">
      <Carousel pictures={apartment.pictures} />
      <div className="apartmentContent">
        <div className="apartmentTitle">
          <h2>{apartment.title}</h2>
          <div className="host">
            <p>{apartment.host.name}</p>
            <img
              src={apartment.host.picture}
              alt={apartment.host.name}
              className="hostPicture"
            />
          </div>
        </div>
        <p className="location">{apartment.location}</p>
        <div className="apartmentValue">
          <div className="tags-container">
            {apartment.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="rating">{apartment.rating}</p>
        </div>
        <div className="apartmentDetails">
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
