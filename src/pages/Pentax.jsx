import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

function Pentax() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/photos`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));
  }, []);

  const pentaxCam = photos.filter(
    (photo) => photo.camera === "65e9c85da1a4f467f930de1e"
  );

  return (
    <div>
      {pentaxCam &&
        pentaxCam.map((photo) => {
          return (
            <section key={photo._id}>
              <Link to={`/photos/${photo._id}`}>
                <div>
                  <img src={photo.image} alt={photo.title} />
                </div>
                <div>
                  <h1>{photo.title}</h1>
                </div>
              </Link>
              <Link to="/cameras/65e9c85da1a4f467f930de1e">Camera info</Link>
              <Link to="/">Back to Photos </Link>
            </section>
          );
        })}
    </div>
  );
}
export default Pentax;
