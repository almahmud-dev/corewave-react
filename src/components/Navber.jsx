import React from "react";
import logo from "../assets/Images/Logo/Logo.png";

const Navber = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="pt-6.5 flex items-center ">
            <div className="w-[25%] me-50">
              <img src={logo} alt="Logo" />
            </div>
            <div className="w-[55%]">
              <ul className="flex items-center gap-11.25">
                <li>
                  <a
                    href="#"
                    className="text-[#1B1B1B] hover:text-[#06C279] font-medium text-[16px] font-lato"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1B1B1B] hover:text-[#06C279] font-medium text-[16px] font-lato"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1B1B1B] hover:text-[#06C279] font-medium text-[16px] font-lato"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1B1B1B] hover:text-[#06C279] font-medium text-[16px] font-lato"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1B1B1B] hover:text-[#06C279] font-medium text-[16px] font-lato"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1B1B1B] hover:text-[#06C279] font-medium text-[16px] font-lato"
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[20%]">
              <button
                className="bg-[#06C279] text-[16px] text-white font-semibold
            rounded-sm py-[14.5px] px-[25px] font-lato"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
