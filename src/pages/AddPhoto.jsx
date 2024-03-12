import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

function AddPhoto() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  /* TEST */

  const [selectedCamera, setSelectedCamera] = useState("");
  const cameras = [
    {
      id: "65e9c85da1a4f467f930de1d",
      name: "Rollei B35",
    },
    {
      id: "65e9c85da1a4f467f930de1e",
      name: "Asahi Pentax K1000",
    },
    {
      id: "65e9c85da1a4f467f930de1f",
      name: "Canon AV-1",
    },
    {
      id: "65e9c85da1a4f467f930de20",
      name: "Lomo Lubitel 166B",
    },
    {
      id: "65e9c85da1a4f467f930de21",
      name: "Olympus Trip 35",
    },
    {
      id: "65e9c85da1a4f467f930de22",
      name: "Nikon FE",
    },
  ];

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  /* TEST */

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
            {cameras.map((camera) => (
              <option key={camera.id} value={camera.id}>
                {camera.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddPhoto;
