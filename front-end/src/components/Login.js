import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../api";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (username === "manager" && password === "12345") {
      navigate("/manager");
    } else if (username === "analyst" && password === "1234") {
      navigate("/analyst");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();


    axiosWithAuth()
      .post("http://localhost:3000/", { username, password })
      .then((res) => {
        const userType = res.data.userType;

        if (userType === "analyst" && password === "1234") {
          navigate("/analyst");
        } else if (userType === "manager" && password === "12345") {
          navigate("/manager");
        } else {
          console.log("Unrecognized user type");
        }
      })
      .catch((error) => {
        console.log("Authentication error:", error);
      });
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleClick} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

