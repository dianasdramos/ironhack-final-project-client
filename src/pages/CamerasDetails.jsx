import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/* Import Axios */
import axios from "axios";

const API_URL = "http://localhost:5005/api";
function CamerasDetails() {
  const [camera, setCamera] = useState({});
  // Get my Route Params, so I can use them
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/cameras/${id}`)
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
          <h3>{camera.name}</h3>
          <p>{camera.description}</p>
          <Link to="/cameras">Back</Link>
        </div>
      )}
    </div>
  );
}
export default CamerasDetails;
