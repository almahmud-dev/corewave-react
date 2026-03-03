import React, { useState, useEffect } from "react";
import logo from "../assets/Images/Logo/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // মেনু ওপেন থাকলে স্ক্রল বন্ধ রাখার জন্য
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Portfolio", link: "#" },
    { name: "Services", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Testimonial", link: "#" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
        <div className="container mx-auto px-4">
          <div className="pt-6 flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto object-contain shrink-0" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-8 xl:gap-12">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-[#1B1B1B] font-medium hover:text-[#06C279] transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <button className="bg-[#06C279] hover:bg-[#05a868] text-white font-semibold rounded-md py-3 px-8 transition-all active:scale-95 shadow-md">
                Register
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 text-[#1B1B1B] hover:text-[#06C279] transition-all"
              >
                <FiMenu size={32} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Sidebar & Overlay --- */}
      
      {/* Black Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[80%] max-w-[350px] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        md:top-4 md:right-4 md:h-auto md:rounded-2xl`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Header */}
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <img src={logo} alt="Logo" className="h-8" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full bg-gray-50 text-gray-600 hover:rotate-90 transition-all duration-300"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex-1 space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
                  className="block py-4 px-5 text-gray-700 font-semibold hover:bg-emerald-50 hover:text-[#06C279] rounded-xl transition-all"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Bottom Button */}
          <div className="mt-auto md:mt-8 pt-6">
            <button className="w-full bg-[#06C279] hover:bg-[#05a868] text-white py-4 font-bold rounded-xl shadow-lg shadow-emerald-100 transition-all active:scale-95">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;