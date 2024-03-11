import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

/* Import Axios */
import axios from "axios";
const API_URL = "http://localhost:5005/api";
function EditPhoto() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/photos/edit/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPlanet = { name, description };

    axios
      .put(`/api/planets/${id}`, updatedPlanet)
      .then(() => {
        navigate("/planets");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`/api/planets/${id}`)
      .then(() => {
        navigate("/planets");
      })
      .catch((error) => console.log(error));
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Project</button>
      </form>
      <button onClick={handleDelete}>Delete Project</button>
    </article>
  );
}

export default EditPhoto;
