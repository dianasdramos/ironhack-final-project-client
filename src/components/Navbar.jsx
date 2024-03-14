import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
 
function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  
  
  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/cameras">
        <button>Cameras</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>

      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
          <Link to="/profile"><span>{user && user.name}</span></Link>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;