/* REACT */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";

/* PAGES */
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";

import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Error from "./pages/Error";

import AddPhoto from "./pages/AddPhoto";
import EditPhoto from "./pages/EditPhoto";
import PhotoDetails from "./pages/PhotoDetails";

import CameraDetails from "./pages/CamerasDetails";
import CameraList from "./pages/CameraList";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* ANON ROUTES */}
      <Routes>
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        {/* PRIVATE ROUTES */}
        <Route
          path="/photo"
          element={
            <IsPrivate>
              <AddPhoto />
            </IsPrivate>
          }
        />
        <Route
          path="/photos/edit/:photoId"
          element={
            <IsPrivate>
              <EditPhoto />
            </IsPrivate>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Homepage />} />
        <Route path="/photos/:photoId" element={<PhotoDetails />} />
        <Route path="/cameras" element={<CameraList />} />
        <Route path="/cameras/:cameraId" element={<CameraDetails />} />{" "}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        {/* FOOTER */}
        <Footer />
      </Routes>
    </div>
  );
}

export default App;
