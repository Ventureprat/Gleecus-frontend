import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Clinical from "../Pages/Clinical";
import Productivity from "../Pages/Productivity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clinical" element={<Clinical />} />
        <Route path="/Productivity" element={<Productivity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
