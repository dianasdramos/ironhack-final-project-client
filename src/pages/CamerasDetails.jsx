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
        <div className="flex  flex items-center flex-col my-5">
          {camera.image && camera.image && (
            <img src={camera.image} alt={camera.description} />
          )}
          <h1 className="underline underline-offset-8 my-10">{camera.name}</h1>
          <h2 className="my-5 text-center mx-[200px]">{camera.year}</h2>
          <h3 className="mb-8 text-center mx-[200px]">{camera.description}</h3>
          <div className="flex justify-center">
            <Link
              className="underline underline-offset-8 mx-4 my-8"
              to="/cameras"
            >
              &lt; Cameras
            </Link>
            <Link className="underline underline-offset-8 mx-4 my-8" to="/">
              Photos &gt;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default CamerasDetails;
