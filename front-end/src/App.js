import {  useEffect,  } from "react";
import { ToastContainer,toast } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import TypeFormFetcher from "./components/fetTypeFrom";
import TypeFormFetcherAdmin from "./components/fetTypeFrom copy";

import "./App.css";
function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/analyst" element={<TypeFormFetcher />}></Route>
          <Route path="/manager" element={<TypeFormFetcherAdmin />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;