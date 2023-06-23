import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/analyst" element={<Dashboard />}></Route>
        <Route path="/manager"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
