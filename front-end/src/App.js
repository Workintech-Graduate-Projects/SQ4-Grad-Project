import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import TypeFormFetcher from "./components/fetTypeFrom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<TypeFormFetcher />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
