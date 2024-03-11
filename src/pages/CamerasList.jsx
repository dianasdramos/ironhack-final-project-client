import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005/api";
function CamerasList() {
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/cameras`)
      .then((response) => setCameras(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="planet-container">
      {cameras &&
        cameras.map((camera) => {
          return (
            <section key={camera.id} className="cards ">
              <Link to={`/cameras/${camera.id}`}>
                <div className="img-container">
                  <img src={camera.image} />
                </div>
                <div className="name-container">
                  <h1>{camera.name}</h1>
                </div>
              </Link>
            </section>
          );
        })}
    </div>
  );
}
export default CamerasList;
