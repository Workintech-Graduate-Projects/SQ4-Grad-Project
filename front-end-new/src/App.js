import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardAnalyst from "./components/Dashboard/Dashboard-analyst";

import Charts from "./components/Dashboard/Chart";
import LineChart from "./components/Dashboard/LineChart";
import PataGrid from "./components/Veriler/DatagridDeneme";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/analyst" element={<DashboardAnalyst />}></Route>
          <Route path="/manager" element={<Dashboard />}></Route>
          <Route path="/orders" element={<PataGrid />}></Route>
          <Route path="/reports" element={<Charts />}></Route>
          <Route path="/creditscore" element={<LineChart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
