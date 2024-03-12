import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

function AddPhoto() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cameras, setCameras] = useState("");

  const [selectedCamera, setSelectedCamera] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/cameras`)
      .then((response) => setCameras(response.data))
      .catch((error) => console.log(error));
  }, []);

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
      <form onSubmit={handleSubmit}>
        <label>Image</label>
        <input
          type="text"
          name="img"
          value={image}
          placeholder="Image URL"
          required
          onChange={(e) => setImage(e.target.value)}
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
        <label>Camera</label>
        <div>
          <label htmlFor="camera">Select a Camera:</label>
          <select
            id="camera"
            value={selectedCamera}
            onChange={handleCameraChange}
          >
            <option value="">Select a camera</option>
            {cameras && cameras.map((camera) => (
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
