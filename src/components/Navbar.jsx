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
      <div className="flex-1 bg-black w-full py-2 mb-3 ">
        <Link to="/">
          <a className="btn btn-ghost text-xl text-white">vintagegram</a>
        </Link>
      </div>
      <div className="flex-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="mb-5">Menu</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                {/*  <li>
                  <Link to="/">
                    <button>Home</button>
                  </Link>
                </li> */}
                <li>
                  <Link to="/cameras">
                    <button>CAMERAS</button>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <button>ABOUT</button>
                  </Link>
                </li>

                {/*    UPDATE     */}
                {isLoggedIn && (
                  <>
                    <li>
                      <button onClick={logOutUser}>LOGOUT</button>
                      <Link to="/profile">
                        <span className="text-black underline underline-offset-8 flex justify-center mt-1 mb-5">
                          {user && user.name}
                        </span>
                      </Link>
                    </li>
                  </>
                )}

                {!isLoggedIn && (
                  <>
                    <li>
                      <Link to="/signup">
                        {" "}
                        <button>SIGN UP</button>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        {" "}
                        <button>LOGIN</button>{" "}
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
