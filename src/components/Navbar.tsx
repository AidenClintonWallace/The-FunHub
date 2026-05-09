import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg z-50 bg-white/30 backdrop-blur-md">

      {/* Top bar */}
      <div className="flex justify-between items-center p-4">

        {/* Logo */}
        <Link to="/">
        <div className="font-bold text-xl">FunHub</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg ">
          <Link to="/" className="hover:animate-pulse ">
            Home
          </Link>

          <Link to="/Jokes" className="hover:animate-pulse">
            Jokes
          </Link>

          <Link to="/Quotes" className="hover:animate-pulse">
            Quotes
          </Link>

          <Link to="/Memes" className="hover:animate-pulse">
            Memes
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/Jokes" onClick={() => setOpen(false)}>
            Jokes
          </Link>
        </div>
      )}

    </nav>
  );
}