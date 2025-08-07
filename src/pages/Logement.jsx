import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel.jsx";
import Collapse from "../components/Collapse";
import RatingStars from "../components/RatingStars";
import "./logement.scss";

const Logement = () => {
  const { id } = useParams(); // Récupère l'id de l'URL
  const [apartment, setApartment] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur de chargement");
        }
        return response.json();
      })
      .then((data) => {
        const found = data.find((item) => item.id === id);
        if (!found) {
          setError(true);
        } else {
          setApartment(found);
        }
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return <Navigate to="/error" />;
  }

  if (!apartment) {
    return <p>Chargement...</p>;
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
                {apartment.host.name.split(" ")[0]} <br />
                {apartment.host.name.split(" ")[1]}
              </p>
              <img
                src={apartment.host.picture}
                alt={apartment.host.name}
                className="picture"
              />
            </div>
            <RatingStars rating={apartment.rating} />
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

