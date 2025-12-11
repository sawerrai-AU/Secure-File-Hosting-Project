import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        username: username,
        email: email,
      });

      alert(res.data.msg);
      window.location.href = "/loginn";
    } catch (err) {
      console.log(err);
      alert("Registration failed!!");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        /><br/>

        <input
          type="email"
          placeholder="Email"
        /><br/>

        <input
          type="password"
          placeholder="Password"
        /><br/>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
