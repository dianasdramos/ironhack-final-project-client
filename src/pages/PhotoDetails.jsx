import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/* Import Axios */
import axios from "axios";
import SocialShare from "../components/SocialShare";

const API_URL = "https://ironhack-final-project-server.onrender.com";
function PhotoDetails() {
  const [photo, setPhoto] = useState({});
  // Get my Route Params, so I can use them
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/photos/${id}`)
      .then((response) => setPhoto(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="flex justify-center">
      {photo && (
        <div>
          {photo.image && photo.image && (
            <img src={photo.image} alt={photo.description} />
          )}
          <h1 className="underline underline-offset-8 my-10">{photo.title}</h1>
          <h2 className="my-5">Year: {photo.year}</h2>
          <h2 className="my-5">Photographer: {photo.photographer}</h2>
          <h3 className="my-5">{photo.description}</h3>
          <h3 className="my-5">Category: {photo.category}</h3>

          <h4>Camera:</h4>
          {photo && photo.camera && (
            <Link
              className="flex justify-center my-8"
              to={`/cameras/${photo.camera._id}`}
            >
              <img src={photo.camera.image} alt={photo.camera.name} />
            </Link>
          )}
          <SocialShare />
          <Link className="underline underline-offset-8 mx-4 my-10" to="/">
            &lt; Back
          </Link>
          <Link
            className="underline underline-offset-8 mx-4 my-10"
            to={`/photos/edit/${photo._id}`}
          >
            Edit &gt;
          </Link>
        </div>
      )}
    </div>
  );
}
export default PhotoDetails;
