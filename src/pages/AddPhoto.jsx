import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005/api";

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
      .get(`${API_URL}/cameras`)
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
      /*nome do model */ user: /*valor do id*/ user._id,
    };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/photo`, photo, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="my cloudinary image" />}
      <form onSubmit={handleSubmit}>
        <label>Image</label>
        <input
          type="file"
          name="img"
          placeholder="Image URL"
          onChange={(e) => handleFileUpload(e)}
        />
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Year</label>
        <input
          type="number"
          name="year"
          value={year}
          required
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Photographer</label>
        <input
          type="text"
          name="photographer"
          value={photographer}
          required
          onChange={(e) => setPhotographer(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />

        <div>
          <label htmlFor="camera">Select a Camera:</label>
          <select
            id="camera"
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
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/profile">Back</Link>
    </div>
  );
}
export default AddPhoto;
