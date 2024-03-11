import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Profile() {

  const {user} = useContext(AuthContext);

  return (
    <section>
      <div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
    </section>
  );
}

export default Profile;