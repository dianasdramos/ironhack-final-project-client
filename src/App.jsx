import { useState } from "react";
import "./App.css";
import Navbar from "./src/components/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import AddPhoto from "./pages/AddPhoto";
import CameraDetails from "./pages/CameraDetails";
import CameraList from "./pages/CameraList";
import EditPhoto from "./pages/EditPhoto";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import PhotoDetails from "./pages/PhotoDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
