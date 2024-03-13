import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005/api";

function UserPhotos() {
  const [photos, setPhotos] = useState([]);
  const {user} = useContext(AuthContext);

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/photos/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div>
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
export default UserPhotos;