import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
      <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
      <Link to="/upload" style={{ marginRight: "10px" }}>Upload</Link>
      <Link to="/downloads" style={{ marginRight: "10px" }}>Downloads</Link>
      <Link to="/myfiles">My Files</Link>
    </nav>
  );
}

export default Navbar;
