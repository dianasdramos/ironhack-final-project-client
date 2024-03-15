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

  // this is a comment for the useeffect
  useEffect(() => {
    const getUser = () => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        axios
          .get(`${API_URL}/auth/verify`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          })
          .then((response) => {
            setUserProfile(response.data);
            console.log(response.data);
            setLoading(false);
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          });
      } else {
        setErrorMessage("User not logged in");
      }
    };

    getUser();
  }, []);

  if (errorMessage) return <div>{errorMessage}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="my-8 flex flex-col justify-center">
        {userProfile && (
          <>
            <div className="flex justify-center">
              <img className="w-80 h-80"
              src={user.picture ? user.picture : placeholderImage}
              alt="profile-photo"
            />
            </div>
            <h1>{userProfile.name}</h1>
          </>
        )}
      </div>
      <Link className=" underline underline-offset-8 my-8" to={`/photo`}>
        ADD PHOTO
      </Link>
      <div>
        <h1 className="text-black text-left underline underline-offset-8 my-8">
          my photos &gt;</h1>
      </div>
      <div className="my-8 flex justify-center">
        <UserPhotos />
      </div>
      <Link className="underline underline-offset-8 my-8" to="/">
        &lt; BACK
      </Link>
    </div>
  );
}

export default Profile;
