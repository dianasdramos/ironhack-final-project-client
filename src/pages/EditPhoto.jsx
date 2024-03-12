import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/* Import Axios */
import axios from "axios";
const API_URL = "http://localhost:5005/api";

function EditPhoto() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cameras, setCameras] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [selectedCamera, setSelectedCamera] = useState("");

  // Ir ao backend buscar a lista de camara
  useEffect(() => {
    axios
      .get(`${API_URL}/cameras`)
      .then((response) => setCameras(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/photos/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setImage(response.data.image);
        setTitle(response.data.title);
        setYear(response.data.year);
        setPhotographer(response.data.photographer);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setSelectedCamera(response.data.camera._id);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPhoto = {
      image,
      title,
      year,
      photographer,
      description,
      category,
      camera: selectedCamera
    };

    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/photos/${id}`, updatedPhoto, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate(`/photos/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const storedToken = localStorage.getItem("authToken");
  const handleDelete = () => {
    axios
      .delete(`${API_URL}/photos/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const [photo, setPhoto] = useState({});
  // Get my Route Params, so I can use them

  useEffect(() => {
    axios
      .get(`${API_URL}/photos/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPhoto(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <article>
      <div>
        {photo && (
          <div>
            {photo.image && photo.image && (
              <img src={photo.image} alt={photo.description} />
            )}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>Image</label>
        <input
          type="text"
          name="img"
          value={image}
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Year</label>
        <input
          type="number"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Photographer</label>
        <input
          type="text"
          name="photographer"
          value={photographer}
          onChange={(e) => setPhotographer(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label>Camera</label>
        <div>
          <label htmlFor="camera">Select a Camera:</label>
          <select
            id="camera"
            value={selectedCamera}
            onChange={handleCameraChange}>
            <option value="">Select a camera</option>
            {cameras && cameras.map((camera) => (
              <option key={camera._id} value={camera._id}>
                {camera.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Update Photo</button>
      </form>
      <button onClick={handleDelete}>Delete Photo</button>
      <Link to={`/photos/${id}`}>Back</Link>
    </article>
  );
}

export default EditPhoto;
