import React from 'react'
import { useState } from "react";



function NavbarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        {isOpen ? "Hide Navbar" : "Show Navbar"}
      </button>

      {/* Navbar */}
      {isOpen && (
        <nav className="w-64 bg-white shadow-lg rounded-lg p-4 space-y-2">
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-100">
            Home
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-100">
            About
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-100">
            Services
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-blue-100">
            Contact
          </a>
        </nav>
      )}
    </div>
  );
}

export default NavbarToggle;

