import React, { useState } from "react";
import logo from "../assets/Images/Logo/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-full bg-transparent">
        <div className="container px-4">
          <div className="pt-6.5 flex items-center justify-between">
            {/* Logo */}
            <div className="w-[25%]">
              <img src={logo} alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex w-[55%]">
              <ul className="flex items-center justify-between w-full gap-8">
                <li>
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Testimonial
                  </a>
                </li>
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
              <button
                onClick={() => setMenuOpen(true)}
              >
                <FiMenu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 transform transition-transform duration-500 ease-in-out 
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
    h-full w-[75%] max-w-[320px] bg-white shadow-2xl
    md:top-4 md:right-4 md:h-auto md:max-h-[85vh] md:rounded-2xl`}>
        <div className="p-6 flex flex-col h-full md:h-auto">
          {/* Close Icon */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="space-y-1">
            {[
              "Home",
              "About",
              "Portfolio",
              "Services",
              "Blog",
              "Testimonial",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-5 text-gray-700 font-medium hover:bg-emerald-50 hover:text-[#06C279] rounded-xl transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Register Button - Md device e nice thakbe button*/}
          <div className="mt-8 mb-4 px-2">
            <button className="w-full bg-[#06C279] hover:bg-[#05a868] text-white py-3.5 font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-95">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
