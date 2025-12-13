import React, { useEffect, useState } from "react";

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
      console.log(err);
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
      loadMyFiles();
    } catch (err) {
      console.log(err);
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

              {/* Delete button */}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => deleteFile(file._id)}
              >
                Delete
              </button>

              <a
                href={`http://localhost:3000/download/${file._id}`}
                style={{ marginLeft: "10px" }}
              >
                Share
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyFiles;
