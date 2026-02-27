import heroimg from "../assets/Images/Hero/Hero.png";
import { GoVideo } from "react-icons/go";

const Banner = () => {
  return (
    <>
      {/* items-stretch এর বদলে items-center ব্যবহার করা হয়েছে যাতে বড় স্ক্রিনেও কন্টেন্ট মাঝে থাকে */}
      <section className="relative bg-[#EFFFF9] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-20 flex md:pt-15 ">
          {/* md পর্যন্ত flex-col রাখা হয়েছে যাতে টেক্সটের নিচে ইমেজ থাকে, lg থেকে flex-row হবে */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-35.25 items-center w-full">
            {/* Left Content Side */}
            {/* py-10 দেওয়া হয়েছে যাতে মোবাইল ও ট্যাবলেটে (md) বিশাল প্যাডিং না থাকে, lg তে py-14 */}
            <div className="w-full lg:max-w-131.25 text-center lg:text-left">
              <h1
                className="text-[#1B1B1B] text-[36px] sm:text-[48px] md:text-[58px]
              font-normal leading-tight md:leading-[71.5px] font-lato"
              >
                Empower Your Team
                <span className="block font-bold">With CoreWave's</span>
              </h1>

              <p
                className="text-[#717171] text-[16px] md:text-[20px] font-normal
              leading-normal font-lato mt-4 md:mt-6 mb-8 md:mb-10 max-w-137.5 mx-auto lg:mx-0"
              >
                Boost Productivity and Wellness in Your Organization with
                CoreWave's Advanced Tools and Techniques
              </p>

              <div
                className="flex flex-col sm:flex-row items-center justify-center
              lg:justify-start gap-4 md:gap-5"
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

            {/* Right Image Side */}
            {/* Right Image Side */}
            <div className="relative w-full flex-1 flex justify-center lg:justify-end items-end self-end mt-auto min-h-[300px] lg:min-h-[500px]">
              {/* Background Circle */}
              <div
                className="hidden lg:block absolute top-[55%] left-[55%]
  lg:-translate-x-[60%] xl:-translate-x-1/2 lg:-translate-y-[45%] xl:-translate-y-1/2
  w-80 h-80 lg:w-80 lg:h-80 xl:w-112.5 xl:h-112.5
  border-20 lg:border-30 xl:border-40
  border-[#D1F7E9] rounded-full -z-10"
              ></div>

              {/* Hero Image - এখানে h-[75vh] এবং self-end নিশ্চিত করবে এটি নিচে লেগে থাকবে */}
              <img
                src={heroimg}
                alt="Hero Image"
                className="relative z-10 w-auto h-auto max-h-[50vh] md:max-h-[60vh] lg:max-h-[80vh] object-contain block lg:-translate-x-18 self-end"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
