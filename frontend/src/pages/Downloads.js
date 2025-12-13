import React, { useEffect, useState } from "react";

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
      console.log(err);
      alert("Could not load files");
    }
  };

  return (
    <div>
      <h2>Downloads</h2>

      {/* Display list of public files */}
      {files.length > 0 ? (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {/* Show file name */}
              {file.filename}

              {/* Download button */}
              <a
                href={`http://localhost:5000/uploads/${file.filename}`}
                style={{ marginLeft: "10px" }}
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files found</p>
      )}
    </div>
  );
}

export default Downloads;
