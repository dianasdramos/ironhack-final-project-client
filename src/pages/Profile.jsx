import { useEffect, useState, useContext } from "react";
import axios from "axios";
import placeholderImage from "./../assets/profile_pic.jpg";

import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import UserPhotos from "../components/UserPhotos";

const API_URL = "https://ironhack-final-project-server.onrender.com";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const getUser = () => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        axios
        .get(
          `${API_URL}/auth/verify`,
          { headers: { Authorization: `Bearer ${storedToken}` }}
          )
          .then((response) => {
            setUserProfile(response.data);
            console.log(response.data)
            setLoading(false);
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          });
        }
        else {
          setErrorMessage("User not logged in");
        }
    };

    getUser();
  }, []);

  if (errorMessage) return <div>{errorMessage}</div>;
  
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        {userProfile && (
          <>
            <img src={user.picture ? user.picture : placeholderImage} alt="profile-photo" />
           <h1>{userProfile.name}</h1>
          </>
        )}
      </div>
      <Link to={`/photo`}>Add new photo</Link>
      <UserPhotos />
      <Link to="/">Back</Link>
    </div>
  );
}

export default Profile;