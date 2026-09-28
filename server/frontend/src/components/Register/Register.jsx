import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });

    const json = await res.json();
    if (json.status === "Authenticated") {
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The user with this username already exists.");
    }
  };

  return (
    <div className="register_container">
      <h2>Sign Up</h2>
      <form onSubmit={register}>
        <div className="input_field">
          <label>Username:</label>
          <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="input_field">
          <label>First Name:</label>
          <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="input_field">
          <label>Last Name:</label>
          <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="input_field">
          <label>Email:</label>
          <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input_field">
          <label>Password:</label>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
