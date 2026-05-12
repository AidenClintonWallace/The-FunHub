import "../index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jokes from "./Jokes";
import Navbar from "@/components/Navbar";
import Quotes from "./Quotes";
import Memes from "./Memes";

function App() {
  return (
    <div className="bg-blue-100 flex flex-col font-serif">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jokes" element={<Jokes />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/Memes" element={<Memes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
