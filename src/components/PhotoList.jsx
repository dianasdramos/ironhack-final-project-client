import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005/api";
function PhotoList() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/photos`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="planet-container">
      {photos &&
        photos.map((photo) => {
          return (
            <section key={photo.id} className="cards ">
              <Link to={`/photos/${photo.id}`}>
                <div className="img-container">
                  <img src={photo.image} />
                </div>
                <div className="name-container">
                  <h1>{photo.title}</h1>
                </div>
              </Link>
            </section>
          );
        })}
    </div>
  );
}
export default PhotoList;