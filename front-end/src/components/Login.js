import React, { useState } from "react";
// import TypeFormFetcher from "./fetTypeFrom";
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
    
    <div className="mx-96 drop-shadow-lg">
        <label htmlFor="name-input"><h2 className="font-bold mt-24 text-[18px]">Panel Girişi</h2></label>
    <form onSubmit={handleSubmit}>
      <div className="mt-6">
      <label htmlFor="name-input" class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Kullanıcı Adı :</label>
      <input type="text" 
      id="text" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="Kullanıcı Adı" required
      value={username}
        onChange={handleUsernameChange}></input>
      </div>
      <div className="mt-8 ">
      <label for="password" class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Parola :</label>
      <input
        type="password"
        placeholder="Parola"
        id="password" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
        value={password}
        onChange={handlePasswordChange}
      />
      </div>
      <div class="flex items-start mt-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
        </input>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Beni Hatırla</label>
  </div>
    <div className="mt-6 ">
      <Link to="/login">
        <button type="submit"
        className="py-2 px-4 shadow-xl bg-blue-500 text-white font-semibold rounded-full mt-4 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Giriş Yap</button>
      </Link>
      </div>
    </form>
    </div>
    
  );
}

export default Login;
