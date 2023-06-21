import React, { useState } from "react";
import TypeFormFetcher from "./fetTypeFrom";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Parola"
        value={password}
        onChange={handlePasswordChange}
      />
      <Link to="/login">
        <button type="submit">Giriş Yap</button>
      </Link>
    </form>
  );

  <TypeFormFetcher />;
}

export default Login;
