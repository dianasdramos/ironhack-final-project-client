import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "https://ironhack-final-project-server.onrender.com";
function CamerasList() {
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/cameras`)
      .then((response) => setCameras(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="planet-container">
      {cameras &&
        cameras.map((camera) => {
          return (
            <section key={camera._id} className="cards ">
              <Link to={`/cameras/${camera._id}`}>
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
      <Link to="/">Back</Link>
    </div>
  );
}
export default CamerasList;
