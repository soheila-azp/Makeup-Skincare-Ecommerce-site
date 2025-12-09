import { useState } from "react";
import axios from "axios";

function Upload({ productId }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/v1/productImage/${productId}/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      
      const uploadedUrl = res.data?.newImage?.url;

      if (uploadedUrl) {
        setImageUrl(`${import.meta.env.VITE_BASE_URL}${uploadedUrl}`);
        setMessage("Uploaded successfully!");
      } else {
        setMessage("Upload succeeded, but no URL returned");
      }
    } catch (err) {
      console.error(err);
      setMessage("Upload failed");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>

      {imageUrl && (
        <div>
          <h4>Preview:</h4>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "200px", marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default Upload;

