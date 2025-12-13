import React, { useState } from "react";
// axios will be used for sending the file to the backend

function Upload() {
  // State to store the selected file from the input
  const [file, setFile] = useState(null);

  // This function runs when the upload form is submitted
  const handleUpload = async (e) => {
    e.preventDefault();

    // create form data to send file
    const formData = new FormData();
    formData.append("file", file);
    // privacy option will be added later

    try {
      // call backend upload API
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            // important for sending files
            "Content-Type": "multipart/form-data",

            // attach token so backend knows the user
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      // show message if upload works
      alert("File uploaded successfully");

      // send user to their files page
      window.location.href = "/myfile";
    } catch (err) {
      console.log(err);
      alert("File upload failed");
    }
  };

  return (
    <div>
      <h2>Upload File</h2>

      {/* Upload form */}
      <form onSubmit={handleUpload}>
        {/* Input for selecting a file */}
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <br />

        {/* Upload button */}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
