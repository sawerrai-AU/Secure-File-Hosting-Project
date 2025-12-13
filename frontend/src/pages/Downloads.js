import React, { useEffect, useState } from "react";
import axios from "axios";
function Downloads() {
  // Store public files in state
  const [files, setFiles] = useState([]);

  // Load public files when page loads
  useEffect(() => {
    loadFiles();
  }, []);

  // Function to get files from backend
  const loadFiles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/publicfiles");
      setFiles(res.data);
    } catch (err) {
      console.error(err);
      alert("Could not load files");
    }
  };

  return (
    <div>
      <h2>Downloads</h2>

      {/* Display list of public files */}
      {files.length == 0 ? (
        <p> No public files available </p>
      ):(
        <ul>
          {files.map((file) => (
            <li key={file._id}>
              {/* Show file name */}
              {file.originalName}

              {/* Download button */}
              <a
                href={`http://localhost:5000/uploads/${file.filename}`}
                style={{ marginLeft: "10px" }}
                download
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      
        
      )}
    </div>
  );
}

export default Downloads;
