import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ReportLostItem from "./pages/ReportLostItem";
import FoundItems from "./pages/FoundItems";
import ClaimItem from "./pages/ClaimItem";

import './App.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report-lost" element={<ReportLostItem />} />
        <Route path="/found-items" element={<FoundItems />} />
        <Route path="/claim-item" element={<ClaimItem />} />
      </Routes>
    </Router>
  );
}

export default App;






