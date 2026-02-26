import heroimg from "../assets/Images/Hero/Hero.png";
import { GoVideo } from "react-icons/go";

const Banner = () => {
  return (
    <>
      <section className="relative bg-[#EFFFF9] py-20 min-h-175 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-35.25 items-center ">
            {/* Left Content Side */}
            <div className="max-w-131.5">
              <h1 className="text-[#1B1B1B] text-[60px] font-normal leading-[71.5px] font-lato">
                Empower Your Team
                <span className="font-bold">With CoreWave's</span>
              </h1>

              <p className="text-[#717171] text-[20px] font-normal leading-normal font-lato mt-6 mb-10 max-w-137.5">
                Boost Productivity and Wellness in Your Organization with
                CoreWave's Advanced Tools and Techniques
              </p>

              <div className="flex items-center gap-5">
                {/* Explore More Button */}
                <button
                  className="bg-[#06C279] text-[16px] text-white font-semibold 
                        rounded-[5px] py-3.75 px-8.75 font-lato hover:bg-[#05a868] transition-all"
                >
                  Explore More
                </button>

                {/* Watch Video Button */}
                <button
                  className="flex items-center gap-2 border-2 border-[#06C279] text-[#1B1B1B] 
                        text-[16px] font-semibold rounded-[5px] py-3.75 px-8.75 font-lato hover:bg-[#06C279]/10 transition-all"
                >
                  <span className="text-[#06C279] text-[30px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#DAF6EB" />
                      <path
                        d="M7.33334 13.9354V6.4608C7.33334 5.59418 8.25413 5.05254 8.95827 5.48585L15.458 9.22317C16.2163 9.65648 16.2163 10.7939 15.458 11.2272L8.95827 14.9646C8.25413 15.3437 7.33334 14.8021 7.33334 13.9354Z"
                        fill="#06C279"
                      />
                    </svg>
                  </span>
                  Watch Video
                </button>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-112.5 h-112.5 border-40 border-[#D1F7E9] rounded-full -z-10">
              </div>
              <img
                src={heroimg}
                alt="Hero Image"
                className="relative z-10 w-full max-w-135.25 bg-no-repeat bg-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
