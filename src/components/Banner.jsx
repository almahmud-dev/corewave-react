import heroimg from "../assets/Images/Hero/Hero.png";
import { GoVideo } from "react-icons/go";

const Banner = () => {
  return (
    <>
      {/* min-h-screen and items-stretch full contain e h pabar jonno */}
      <section className="relative bg-[#EFFFF9] min-h-screen flex items-stretch overflow-hidden">
        <div className="container mx-auto px-4 relative z-20 flex">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-35.25 items-center w-full">
            {/* Left Content Side - text ke majhe rakhar jonno py-20  */}
            <div className="w-full lg:max-w-131.25 text-center md:text-left py-20">
              <h1
                className="text-[#1B1B1B] text-[36px] sm:text-[48px] md:text-[58px]
              font-normal leading-tight md:leading-[71.5px] font-lato"
              >
                Empower Your Team
                <span className="block font-bold">With CoreWave's</span>
              </h1>

              <p
                className="text-[#717171] text-[16px] md:text-[20px] font-normal
              leading-normal font-lato mt-4 md:mt-6 mb-8 md:mb-10 max-w-137.5 mx-auto md:mx-0"
              >
                Boost Productivity and Wellness in Your Organization with
                CoreWave's Advanced Tools and Techniques
              </p>

              <div
                className="flex flex-col sm:flex-row items-center justify-center
              md:justify-start gap-4 md:gap-5"
              >
                <button
                  className="w-full sm:w-auto bg-[#06C279] text-white
                font-semibold rounded-[5px] py-3.75 px-8.75 font-lato hover:bg-[#05a868] transition-all"
                >
                  Explore More
                </button>

                <button
                  className="w-full sm:w-auto flex items-center justify-center
                gap-2 border-2 border-[#06C279] text-[#1B1B1B] font-semibold
                rounded-[5px] py-3.75 px-8.75 font-lato hover:bg-[#06C279]/10 transition-all"
                >
                  <span className="text-[#06C279] text-[24px]">
                    <GoVideo />
                  </span>
                  Watch Video
                </button>
              </div>
            </div>

            {/* Right Image Side - image ke nice namanor jonno self-end and mt-auto */}
            <div className="relative w-full flex-1 flex justify-center md:justify-end items-end self-end mt-auto">
              {/* Background Circle - left e soranor jonno left-[55%] */}
              <div
                className="hidden lg:block absolute top-[55%] left-[55%] -translate-x-1/2 -translate-y-1/2 
                w-70 h-70 md:w-112.5 md:h-112.5 border-20 md:border-40 
                border-[#D1F7E9] rounded-full -z-10"
              ></div>

              {/* Hero Image - Right e soranor jonno md:-translate-x-10  */}
              <img
                src={heroimg}
                alt="Hero Image"
                className="relative z-10 w-auto h-auto md:h-[85vh] max-h-screen object-contain block md:-translate-x-18"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
