import React, { useState } from "react";
import logo from "../assets/Images/Logo/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
        <div className="container px-10 lg:px-0">
          <div className="pt-6.5 flex items-center justify-between">

            {/* Logo */}
            <div className="w-[25%]">
              <img src={logo} alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block w-[55%]">
              <ul className="flex items-center gap-8">
                <li><a href="#" className="nav-link">Home</a></li>
                <li><a href="#" className="nav-link">About</a></li>
                <li><a href="#" className="nav-link">Portfolio</a></li>
                <li><a href="#" className="nav-link">Services</a></li>
                <li><a href="#" className="nav-link">Blog</a></li>
                <li><a href="#" className="nav-link">Testimonial</a></li>
              </ul>
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:block w-[20%] text-right">
              <button className="bg-[#06C279] text-white font-semibold rounded-sm py-3 px-6">
                Register
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(true)}
                className="p-3 rounded-full
                shadow-lg hover:rotate-90 hover:scale-105 transition-all duration-300">
                <FiMenu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-70 bg-white z-50 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">

          {/* Close Icon */}
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition">
              <FiX size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="mt-8 space-y-6">
            <li><a href="#" className="mobile-link">Home</a></li>
            <li><a href="#" className="mobile-link">About</a></li>
            <li><a href="#" className="mobile-link">Portfolio</a></li>
            <li><a href="#" className="mobile-link">Services</a></li>
            <li><a href="#" className="mobile-link">Blog</a></li>
            <li><a href="#" className="mobile-link">Testimonial</a></li>
          </ul>

          {/* Register Button */}
          <button className="mt-8 w-full bg-[#06C279] text-white py-3 rounded">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Navber;