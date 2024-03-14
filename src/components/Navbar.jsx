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
    <nav className="navbar bg-base-100 text-black">
      <div className="flex-1 bg-black w-full">
        <a className="btn btn-ghost text-xl text-white">vintagegram</a>
      </div>
      <div className="flex-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to="/">
                    <button>Home</button>
                  </Link>
                </li>
                <li>
                  <Link to="/cameras">
                    <button>Cameras</button>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <button>About</button>
                  </Link>
                </li>

                {/*    UPDATE     */}
                {isLoggedIn && (
                  <>
                    <li>
                      <button onClick={logOutUser}>Logout</button>
                      <Link to="/profile">
                        <span>{user && user.name}</span>
                      </Link>
                    </li>
                  </>
                )}

                {!isLoggedIn && (
                  <>
                    <li>
                      <Link to="/signup">
                        {" "}
                        <button>Sign Up</button>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        {" "}
                        <button>Login</button>{" "}
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
