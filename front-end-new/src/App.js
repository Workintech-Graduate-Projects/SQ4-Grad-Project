import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Dashboard/Orders";
import Chart from "./components/Dashboard/Chart";
import Deposits from "./components/Dashboard/Deposits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/analyst" element={<Dashboard />}></Route>
        <Route path="/manager" element={<Dashboard />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/charts" element={<Chart />}></Route>
        <Route path="/deposits" element={<Deposits />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
