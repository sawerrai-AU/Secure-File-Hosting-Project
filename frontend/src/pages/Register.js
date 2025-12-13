import React, { useState } from "react";
import axios from "axios";

function Register() {
  //state to store form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
const[password, setPassword] = useState(" ");

//Handle form submit
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      //send registration request to backend
      const res = await axios.post("http://localhost:5000/api/register", {
        username: username,
        email: email,
        password:password,
      });

      alert(res.data.msg || "Registration successful");
      //Redirect to Login page
      window.location.href = "/login";
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br/>

{/*Email*/}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
          />
        <br/>

{/*password*/}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required
        /><br/>

{/*submit*/}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
