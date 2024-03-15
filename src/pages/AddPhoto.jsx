import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "https://ironhack-final-project-server.onrender.com";

function AddPhoto() {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cameras, setCameras] = useState("");

  const [imageUrl, setImageUrl] = useState(null);
  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/cameras`)
      .then((response) => setCameras(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (url) => {
    setImage(url);
  };
  const handleFileUpload = (e) => {
    // disable the submit form button till we get the image url from Cloudinary
    setWaitingForImageUrl(true);

    //check if we receive the file path correctly
    console.log("The file to be uploaded is: ", e.target.files[0]);

    // create url including your personal Cloudinary Name
    const url = `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_NAME
    }/upload`;

    const dataToUpload = new FormData();
    // properties needs to have those specific names!!!
    dataToUpload.append("file", e.target.files[0]);
    // VITE_UNSIGNED_UPLOAD_PRESET => name of the unsigned upload preset created in your Cloudinary account
    dataToUpload.append(
      "upload_preset",
      import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET
    );

    axios
      .post(url, dataToUpload)
      .then((response) => {
        // to see the structure of the response
        console.log("RESPONSE ", response.data);
        // the image url is stored in the property secure_url
        setImageUrl(response.data.secure_url);
        setWaitingForImageUrl(false);
        handleChange(response.data.secure_url);
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });
  };

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const photo = {
      image,
      title,
      year,
      photographer,
      description,
      category,
      camera: selectedCamera,
      user: user._id,
    };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/photo`, photo, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  }

  return (
    <div className="justify-center my-10 mx-8">
      {imageUrl && <img src={imageUrl} alt="my cloudinary image" />}
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input
            type="file"
            name="img"
            placeholder="Image URL"
            onChange={(e) => handleFileUpload(e)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          Title:
          <input
            type="text"
            className="grow pr-10"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          Year:
          <input
            type="number"
            className="grow pr-10"
            name="year"
            value={year}
            required
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          Photographer:
          <input
            type="text"
            className="grow pr-10"
            name="photographer"
            value={photographer}
            required
            onChange={(e) => setPhotographer(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          Description:
          <input
            type="text"
            className="grow pr-10"
            name="description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          Category:
          <input
            type="text"
            className="grow pr-10"
            name="category"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <div>
          <label
            className="input input-bordered flex items-center gap-2 my-8"
            htmlFor="camera"
          >
            Select a Camera:
            <select
              id="camera"
              className="grow pr-10"
              value={selectedCamera}
              onChange={handleCameraChange}
            >
              <option value="">Select a camera</option>
              {cameras &&
                cameras.map((camera) => (
                  <option key={camera._id} value={camera._id}>
                    {camera.name}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <button className="underline underline-offset-8 my-5" type="submit">
          SUBMIT
        </button>
      </form>
      <Link className="underline underline-offset-8 my-5" to="/profile">
        &lt; BACK
      </Link>
    </div>
  );
}
export default AddPhoto;
