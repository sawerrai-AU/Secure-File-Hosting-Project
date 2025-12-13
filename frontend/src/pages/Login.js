import React, { useState } from "react";
import axios from "axios";

function Login() {
  // State to store form inputs
  const [email, setEmail] = useState("");
const[password, setPassword] =useState(" ");
  //Handle form submit
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent the page from refreshing

    try {
      // Send the login request to the backend API
      const res = await axios.post("http://localhost:5000/api/login", {
        email: email,
        password,
      });

      //store JWT token
      localStorage.setItem("token", res.data.token);

      // Redirect after successful login
      window.location.href = "/upload";
    } catch (err) {
      // Log any errors in the console
      console.error(err);

      // Show a message if login does not work
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {/* Login form */}
      <form onSubmit={handleLogin}>
        {/* Email input field */}
        <input
          type="email"
          placeholder="Email"
          value ={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        {/* Password input field */}
        <input type="password" placeholder="Password" 
        value={password}
        />
        <br />

        {/* Button to submit the form */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
