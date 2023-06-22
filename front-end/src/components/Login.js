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
    <div className="mx-96 drop-shadow-lg">
        <label htmlFor="name-input"><h2 className="font-bold mt-24 mb-9 text-[18px]">Panel Girişi</h2></label>
      <form onSubmit={handleLogin}>
        <div className="mt-8 ">
          <label htmlFor="name-input" class=" text-left  text-sm font-medium text-gray-900 dark:text-white">Kullanıcı Adı</label>
          <input
            type="text"
            id="text"
            class="bg-gray-50 border border-gray-300 mx-auto mt-6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={username}
            placeholder="Kullanıcı Adı" required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-8 ">
          <label for="password" class=" text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Parola</label>
          <input
            type="password"
            id="password" 
            placeholder="Parola"
            class="bg-gray-50 border border-gray-300 mx-auto mt-6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  <div className="mt-6 ">
        <button onClick={handleClick} type="submit"
         className="py-2 px-4 shadow-xl bg-blue-500 text-white font-semibold rounded-full mt-4 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

