import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/* Import Axios */
import axios from "axios";

const API_URL = "https://ironhack-final-project-server.onrender.com";
function CamerasDetails() {
  const [camera, setCamera] = useState({});
  // Get my Route Params, so I can use them
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/cameras/${id}`)
      .then((response) => setCamera(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {camera && (
        <div>
          {camera.image && camera.image && (
            <img src={camera.image} alt={camera.description} />
          )}
          <h1>{camera.name}</h1>
          <h2>{camera.year}</h2>
          <h3>{camera.description}</h3>
          <Link to="/cameras">Back to Cameras</Link>
          <Link to="/">Back to Photos </Link>
        </div>
      )}
    </div>
  );
}
export default CamerasDetails;
