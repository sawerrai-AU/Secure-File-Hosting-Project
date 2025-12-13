import React, { useEffect, useState } from "react";
import axios from "axios";
function MyFiles() {
  // State to store files uploaded by the logged-in user
  const [files, setFiles] = useState([]);

  // Load user files when page loads
  useEffect(() => {
    loadMyFiles();
  }, []);

  // Function to get user's files from backend
  const loadMyFiles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/myfiles", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      setFiles(res.data);
    } catch (err) {
      console.error(err);
      alert("Unable to load your files");
    }
  };

  // Function to delete a file
  const deleteFile = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/file/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      // Reload files after delete
      setFiles(files.filter((file) => file._id !== id));
    } catch (err) {
      console.error(err);
      alert("Could not delete file");
    }
  };

  return (
    <div>
      <h2>My Files</h2>

      {/* List of user files */}
      {files.length === 0 ? (
        <p>No files uploaded yet</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file._id}>
              {/* File name */}
              {file.originalName}

              {/*Download link*/}
              <a
              href={`http://localhost:5000/${file.path}`}
                style={{ marginLeft: "10px" }} >
                download
</a>
              {/* Delete button */}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => deleteFile(file._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyFiles;
