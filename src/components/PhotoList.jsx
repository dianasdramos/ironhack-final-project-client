import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://ironhack-final-project-server.onrender.com";

function PhotoList() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/photos`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-20 my-10">
      {photos &&
        photos.map((photo) => {
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
            </section>
          );
        })}
    </div>
  );
}
export default PhotoList;
