import { useState } from "react";
import { Link } from "react-router-dom";

export default function Barab() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">COS Junior</h1>

      <button
        className="md:hidden block"
        onClick={() => setOpen(!open)}
        aria-label="menu"
      >
        ☰
      </button>

      <ul
        className={`md:flex gap-6 absolute md:static bg-gray-900 left-0 w-full md:w-auto p-4 md:p-0 transition-all ${
          open ? "top-16" : "top-[-400px]"
        }`}
      >
        <li><Link to="/" className="hover:text-blue-400">Keur</Link></li>
        <li><Link to="/projets" className="hover:text-blue-400">Liggey</Link></li>
        <li><Link to="/competences" className="hover:text-blue-400">Xam-xam</Link></li>
        <li><Link to="/apropos" className="hover:text-blue-400">Nit</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Jokkondiral</Link></li>
      </ul>
    </nav>
  );
}