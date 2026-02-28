import React from "react";
import webdeveloper from "../assets/Images/Our_Services/web.png";
import uiuxanalysis from "../assets/Images/Our_Services/UI&UX.png";
import seomarketing from "../assets/Images/Our_Services/SEO.png";
import graphicdesign from "../assets/Images/Our_Services/Graphic.png";

const OurServices = () => {
  const services = [
    { id: 1, img: webdeveloper, heading: "Web Development" },
    { id: 2, img: uiuxanalysis, heading: "UI/UX Analysis" },
    { id: 3, img: seomarketing, heading: "SEO Marketing" },
    { id: 4, img: graphicdesign, heading: "Graphic Design" },
  ];

  const cardDescription =
    "Web development is the art of creating engaging and visually appealing websites";

  return (
    <section className="bg-[#EFFFF9] rounded-[40px] md:rounded-[300px_0px_300px_0px] py-12 md:py-20 px-4 sm:px-10 lg:px-20 xl:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-16">
        {/* Left Side: Cards Layout */}
        {/* Mobile: 1 column, Tablet: 2 columns with Staggered effect */}
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start order-2 lg:order-1">
          {/* Column 1: Web Dev & SEO */}
          <div className="flex flex-col gap-6 sm:mt-20 lg:mt-32 font-lato">
            <ServiceCard service={services[0]} description={cardDescription} />
            <ServiceCard service={services[2]} description={cardDescription} />
          </div>

          {/* Column 2: UI/UX (Top) & Graphic Design */}
          <div className="flex flex-col gap-6 font-lato">
            <ServiceCard
              service={services[1]}
              description={cardDescription}
              isSpecial={true}
            />
            <ServiceCard service={services[3]} description={cardDescription} />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:max-w-112.5 xl:max-w-137.5 text-center lg:text-left order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#1B1B1B] mb-6 leading-13.5">
            We Offer A Variety Of <br className="hidden xl:block" /> Services
            Such As
          </h2>
          <p className="text-[#7B7B7B] text-sm sm:text-base mb-8 leading-6.5">
            At our company, we pride ourselves on offering a variety of services
            to meet the diverse needs of our clients. Whether you're looking for
            marketing assistance, website design, or IT support, we've got you
            covered.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#D1F7EA] text-[#06C279] px-8 py-3 rounded-md font-bold hover:bg-[#06C279] hover:text-white transition-all duration-300">
              All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Card Component
const ServiceCard = ({ service, description, isSpecial }) => {
  return (
    <div
      className={`group w-full max-w-75 sm:w-60 md:w-70 p-6 md:p-8 rounded-2xl transition-all duration-500 cursor-pointer shadow-sm
      ${isSpecial ? "bg-[#76E3B5] text-white" : "bg-white text-[#1a1a1a]"} 
      hover:bg-[#06C279] hover:text-white hover:-translate-y-2`}
    >
      <div className="mb-5">
        <img
          src={service.img}
          alt={service.heading}
          className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:brightness-0 group-hover:invert 
            ${isSpecial ? "brightness-0 invert" : ""}`}
        />
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3 transition-colors">
        {service.heading}
      </h3>
      <p
        className={`text-xs md:text-sm leading-relaxed transition-colors ${isSpecial ? "text-white/90" : "text-gray-500"} group-hover:text-white`}
      >
        {description}
      </p>
    </div>
  );
};

export default OurServices;
