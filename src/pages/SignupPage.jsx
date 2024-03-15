import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Hero from "../components/Hero";

const API_URL = "https://ironhack-final-project-server.onrender.com";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePicture = (e) => setPicture(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, picture };

    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <Hero />
      <h1>Sign Up</h1>
      <div className="justify-center my-10 mx-8">
        <form onSubmit={handleSignupSubmit}>
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

          <label className="input input-bordered flex items-center gap-2 my-8">
            Name:
            <input
              type="text"
              name="name"
              className="grow pr-10"
              value={name}
              onChange={handleName}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 my-8">
            Picture:
            <input
              type="text"
              className="grow pr-10"
              name="picture"
              value={picture}
              onChange={handlePicture}
            />
          </label>

          <button type="submit">Sign Up</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
