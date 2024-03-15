import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Hero from "../components/Hero";

const API_URL = "https://ironhack-final-project-server.onrender.com";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        // Save the token in the localStorage.
        storeToken(response.data.authToken);

        // Verify the token by sending a request
        // to the server's JWT validation endpoint.
        authenticateUser();

        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <Hero />
      <h1>Login</h1>
      <div className="justify-center my-10 mx-8">
        <form onSubmit={handleLoginSubmit}>
          <label className="input input-bordered flex items-center gap-2 my-8">
            Email:
            <input
              type="email"
              name="email"
              className="grow pr-10"
              value={email}
              onChange={handleEmail}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 my-8">
            Password:
            <input
              type="password"
              name="password"
              className="grow pr-10"
              value={password}
              onChange={handlePassword}
            />
          </label>

          <button type="submit">LOGIN</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default LoginPage;
