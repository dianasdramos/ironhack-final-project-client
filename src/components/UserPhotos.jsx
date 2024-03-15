import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "https://ironhack-final-project-server.onrender.com";

function UserPhotos() {
  const [photos, setPhotos] = useState([]);
  const {user} = useContext(AuthContext);

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/photos/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
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
export default UserPhotos;