import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Dashboard/Orders";
import Chart from "./components/Dashboard/Chart";
import Deposits from "./components/Dashboard/Deposits";
import PataGrid from "./components/Veriler/DatagridDeneme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/analyst" element={<Dashboard />}></Route>
        <Route path="/manager" element={<Dashboard />}></Route>
        <Route path="/orders" element={<PataGrid />}></Route>
        <Route path="/reports" element={<Chart />}></Route>
        <Route path="/creditscore" element={<Deposits />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
