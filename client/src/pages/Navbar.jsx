import React, { useState } from "react";
import Dexkor from "./Dexkor_logo.png"; // ✅ Adjust your path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 🧷 Sticky wrapper for both bars — full height container
    <div className="sticky top-0 z-50 select-none">
      <div className="bg-gray-800 text-white">
        <div className="hidden md:flex justify-end space-x-6 px-6 py-2">
          <a href="/contact" className="hover:text-gray-300">Contact sales</a>
          <a href="/support" className="hover:text-gray-300">Support</a>
          <a href="/login" className="hover:text-gray-300">Log in</a>
        </div>

        <div className="bg-gray-900 border-t border-gray-700">
          <div className="container mx-auto px-4 flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src={Dexkor} alt="Dexkor Logo" className="h-7" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              <a href="#product" className="text-white hover:text-gray-300">Product</a>
              <a href="#solution" className="text-white hover:text-gray-300">Solution</a>
              <a href="#resources" className="text-white hover:text-gray-300">Resources</a>
              <a href="#about" className="text-white hover:text-gray-300">About</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex">
              <a
                href="#get-started"
                className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition"
              >
                Book a Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden px-4 pb-4 bg-gray-900">
              <a href="#product" className="block text-white py-2 hover:text-gray-300">Product</a>
              <a href="#solution" className="block text-white py-2 hover:text-gray-300">Solution</a>
              <a href="#resources" className="block text-white py-2 hover:text-gray-300">Resources</a>
              <a href="#about" className="block text-white py-2 hover:text-gray-300">About</a>
              <a
                href="#get-started"
                className="block mt-2 px-4 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Book a Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
