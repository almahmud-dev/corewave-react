import React from "react";
import { motion } from "framer-motion";
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
    <section className="bg-[#EFFFF9] rounded-[40px] md:rounded-[300px_0px_300px_0px] py-12 md:py-20 px-4 sm:px-10 lg:px-20 xl:px-24 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-16">
        
        {/* Left Side: Cards Layout */}
        <div className="flex flex-col items-center order-2 lg:order-1">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* Column 1: Web Dev & SEO */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 sm:mt-20 lg:mt-32 font-lato"
            >
              <ServiceCard service={services[0]} description={cardDescription} index={0} />
              <ServiceCard service={services[2]} description={cardDescription} index={2} />
            </motion.div>

            {/* Column 2: UI/UX & Graphic Design */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 font-lato"
            >
              <ServiceCard
                service={services[1]}
                description={cardDescription}
                isSpecial={true}
                index={1}
              />
              <ServiceCard service={services[3]} description={cardDescription} index={3} />
            </motion.div>
          </div>

          {/* Button for sm and md devices (Hidden on lg and up) */}
          <div className="mt-10 lg:hidden">
            <AllServicesButton />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:max-w-[450px] xl:max-w-[550px] text-center lg:text-left order-1 lg:order-2"
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#1B1B1B] mb-6 leading-tight">
            We Offer A Variety Of <br className="hidden xl:block" /> Services
            Such As
          </h2>
          <p className="text-[#7B7B7B] text-sm sm:text-base mb-8 leading-relaxed">
            At our company, we pride ourselves on offering a variety of services
            to meet the diverse needs of our clients. Whether you're looking for
            marketing assistance, website design, or IT support, we've got you
            covered.
          </p>
          {/* Button for lg devices (Hidden on sm and md) */}
          <div className="hidden lg:block">
            <AllServicesButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Button Component
const AllServicesButton = () => (
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#D1F7EA] text-[#06C279] px-8 py-3 rounded-md font-bold hover:bg-[#06C279] hover:text-white transition-all duration-300 shadow-sm"
  >
    All Services
  </motion.button>
);

// Card Component
const ServiceCard = ({ service, description, isSpecial }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group w-full max-w-[300px] sm:w-60 md:w-72 p-6 md:p-8 rounded-2xl cursor-pointer shadow-md transition-all duration-500
      ${isSpecial ? "bg-[#76E3B5] text-white" : "bg-white text-[#1a1a1a]"} 
      hover:bg-[#06C279] hover:text-white`}
    >
      <div className="mb-5 overflow-hidden">
        <motion.img
          whileHover={{ rotate: 10, scale: 1.1 }}
          src={service.img}
          alt={service.heading}
          className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-300  
            ${isSpecial ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"}`}
        />
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3">{service.heading}</h3>
      <p className={`text-xs md:text-sm leading-relaxed transition-colors ${isSpecial ? "text-white/90" : "text-gray-500"} group-hover:text-white/90`}>
        {description}
      </p>
    </motion.div>
  );
};

export default OurServices;