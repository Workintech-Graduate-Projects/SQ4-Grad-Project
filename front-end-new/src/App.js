import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardAnalyst from "./components/Dashboard/Dashboard-analyst";

import LineChart from "./components/Dashboard/LineChart";
import PataGrid from "./components/Veriler/DatagridDeneme";
import Reports from "./components/Dashboard/Reports";
import Exceptions from "./components/Dashboard/Exceptions";
import Titles from "./components/Dashboard/Titles";
import Sectors from "./components/Dashboard/Sectors";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/analyst" element={<DashboardAnalyst />}></Route>
          <Route path="/manager" element={<Dashboard />}></Route>
          <Route path="/orders" element={<PataGrid />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/creditscore" element={<LineChart />}></Route>
          <Route path="/exceptions" element={<Exceptions />}></Route>
          <Route path="/titles" element={<Titles />}></Route>
          <Route path="/sectors" element={<Sectors />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
