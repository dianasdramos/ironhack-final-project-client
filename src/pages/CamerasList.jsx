import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "https://ironhack-final-project-server.onrender.com";
function CamerasList() {
  const [cameras, setCameras] = useState([]);

  // this is a comment for the useeffect
  useEffect(() => {
    axios
      .get(`${API_URL}/api/cameras`)
      .then((response) => setCameras(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-100 flex items-center flex-col">
      {cameras &&
        cameras.map((camera) => {
          return (
            <section key={camera._id} className="cards  my-10 ">
              <Link to={`/cameras/${camera._id}`}>
                <div className="mb-10">
                  <img src={camera.image} />
                </div>
                <div className="my-10">
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
