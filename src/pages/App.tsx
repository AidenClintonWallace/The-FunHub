import "../index.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <div className="bg-blue-100 flex flex-col font-serif">
      <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
