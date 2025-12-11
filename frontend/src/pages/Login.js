import React, { useState } from "react";

function Login() {
  // State to store the email entered by the user
  const [email, setEmail] = useState("");

  // This function runs when the login form is submitted
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent the page from refreshing

    try {
      // Send the login request to the backend API
      const res = await axios.post("http://localhost:5000/api/login", {
        email: email,
      });

      // Save the token locally so the user stays logged in
      localStorage.setItem("token", res.data.tokn);

      // Redirect the user to the dashboard page
      window.location.href = "/dashbord";
    } catch (err) {
      // Log any errors in the console
      console.log(err);

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
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        {/* Password input field */}
        <input type="password" placeholder="Password" />
        <br />

        {/* Button to submit the form */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
