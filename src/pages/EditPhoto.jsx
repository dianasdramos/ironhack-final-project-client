import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/* Import Axios */
import axios from "axios";
import { AuthContext } from "../context/auth.context";
const API_URL = "https://ironhack-final-project-server.onrender.com";

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
  const [imageUrl, setImageUrl] = useState(null);
  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState("");
  const { user } = useContext(AuthContext);

  // Ir ao backend buscar a lista de camara
  useEffect(() => {
    axios
      .get(`${API_URL}/api/cameras`)
      .then((response) => setCameras(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/photos/${id}`, {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPhoto = {
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
      .put(`${API_URL}/api/photos/${id}`, updatedPhoto, {
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
      .delete(`${API_URL}/api/photos/${id}`, {
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
      .get(`${API_URL}/api/photos/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPhoto(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <article className="justify-center my-10 mx-8">
      <div>
        {imageUrl && <img src={imageUrl} alt="my cloudinary image" />}
        {photo && (
          <div>
            {photo.image && photo.image && (
              <img src={photo.image} alt={photo.description} />
            )}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label className="justify-center mx-8">Image:</label>
        <input
          type="file"
          name="img"
          placeholder="Image URL"
          onChange={(e) => handleFileUpload(e)}
        />
        <label className="input input-bordered flex items-center gap-2 my-8">
          Title:
          <input
            type="text"
            className="grow pr-10"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8 w-full">
          Year:
          <input
            type="number"
            className="grow"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          Photographer:
          <input
            type="text"
            className="grow"
            name="photographer"
            value={photographer}
            onChange={(e) => setPhotographer(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          Description:
          <input
            type="text"
            className="grow"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          Category:
          <input
            type="text"
            className="grow"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <div>
          <label
            htmlFor="camera"
            className="input input-bordered flex items-center gap-2 my-8"
          >
            Select a Camera:
            <select
              id="camera"
              className="grow"
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
        <button className="underline underline-offset-8" type="submit">
          UPDATE PHOTO
        </button>
      </form>
      <div className="flex items-center flex-col my-8">
        <button
          className="bg-white underline underline-offset-8"
          onClick={handleDelete}
        >
          DELETE PHOTO
        </button>
        <Link
          className="underline underline-offset-8 my-5"
          to={`/photos/${id}`}
        >
          &lt; BACK
        </Link>
      </div>
    </article>
  );
}

export default EditPhoto;
