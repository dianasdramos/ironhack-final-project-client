/* REACT */

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
import CamerasList from "./pages/CamerasList";

/* PAGES FILTER */
import Nikon from "./pages/Nikon";
import Olympus from "./pages/Olympus";
import Lomo from "./pages/Lomo";
import Canon from "./pages/Canon";
import Pentax from "./pages/Pentax";
import Rolei from "./pages/Rolei";

function App() {
  return (
    <div>
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
          path="/photos/edit/:id"
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
        <Route path="/photos/:id" element={<PhotoDetails />} />
        <Route path="/cameras" element={<CamerasList />} />
        <Route path="/cameras/:id" element={<CameraDetails />} />{" "}
        <Route path="/about" element={<About />} />
        <Route path="/nikon" element={<Nikon />} />
        <Route path="/olympus" element={<Olympus />} />
        <Route path="/lomo" element={<Lomo />} />
        <Route path="/canon" element={<Canon />} />
        <Route path="/pentax" element={<Pentax />} />
        <Route path="/rolei" element={<Rolei />} />
        <Route path="*" element={<Error />} />
        {/* FOOTER */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
