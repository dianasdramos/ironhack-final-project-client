import { useEffect, useState, useContext } from "react";
import axios from "axios";
import placeholderImage from "./../assets/profile_pic.jpg";

import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005/api";

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
          `${API_URL}/profile/${user._id}`,
          { headers: { Authorization: `Bearer ${storedToken}` }}
          )
          .then((response) => {
            setUserProfile(response.data);
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
  }, [user._id]);

  if (errorMessage) return <div>{errorMessage}</div>;
  
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        {userProfile && (
          <>
            {/* <img className="w-32 h-32 rounded-full object-cover mb-4" src={student.image} alt="profile-photo" /> */}
            <img
            src={placeholderImage}
            alt="profile-photo"
          />            
            <h1>{userProfile.name}</h1>
          </>
        )}
      </div>
      
    </div>
  );
}

export default Profile;