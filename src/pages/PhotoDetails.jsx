import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/* Import Axios */
import axios from "axios";

const API_URL = "http://localhost:5005/api";
function PhotoDetails() {
  const [photo, setPhoto] = useState({});
  // Get my Route Params, so I can use them
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/photos/${id}`)
      .then((response) => setPhoto(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {photo && (
        <div>
          {photo.image && photo.image && (
            <img src={photo.image} alt={photo.description} />
          )}
          <h3>{photo.title}</h3>
          <p>{photo.description}</p>
          <Link to="/photos">Back</Link>
        </div>
      )}
    </div>
  );
}
export default PhotoDetails;
