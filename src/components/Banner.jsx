import heroimg from "../assets/Images/Hero/Hero.png";
import { GoVideo } from "react-icons/go";

const Banner = () => {
  return (
    <>
      <section className="relative bg-[#EFFFF9] py-10 md:py-20 min-h-screen flex items-center overflow-hidden">
  <div className="container mx-auto py-10 lg:py-0 px-4">
    {/* মোবাইলে gap কম থাকবে, md স্ক্রিনে gap-20 বা আপনার দেওয়া ভ্যালু হবে */}
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-[141px] items-center">
      
      {/* Left Content Side */}
      <div className="w-full lg:max-w-[526px] text-center md:text-left">
        <h1 className="text-[#1B1B1B] text-[36px] sm:text-[48px] md:text-[58px] font-normal leading-tight md:leading-[71.5px] font-lato">
          Empower Your Team
          <span className="block font-bold">With CoreWave's</span>
        </h1>

        <p className="text-[#717171] text-[16px] md:text-[20px] font-normal leading-normal font-lato mt-4 md:mt-6 mb-8 md:mb-10 max-w-[550px] mx-auto md:mx-0">
          Boost Productivity and Wellness in Your Organization with
          CoreWave's Advanced Tools and Techniques
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-5">
          {/* Explore More Button */}
          <button className="w-full sm:w-auto bg-[#06C279] text-white font-semibold rounded-[5px] py-3.5 px-8 hover:bg-[#05a868] transition-all">
            Explore More
          </button>

          {/* Watch Video Button */}
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-[#06C279] text-[#1B1B1B] font-semibold rounded-[5px] py-3.5 px-8 hover:bg-[#06C279]/10 transition-all">
            <span className="text-[#06C279] text-[24px]">
               <GoVideo /> {/* আপনি যেহেতু আইকন ইম্পোর্ট করেছেন, সরাসরি ব্যবহার করতে পারেন */}
            </span>
            Watch Video
          </button>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="relative mt-12 md:mt-0 w-full max-w-[400px] md:max-w-none">
        {/* Background Circle - মোবাইলে একটু ছোট করা হয়েছে */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] border-[20px] md:border-[40px] border-[#D1F7E9] rounded-full -z-10">
        </div>
        <img
          src={heroimg}
          alt="Hero Image"
          className="relative z-10 w-full h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default Banner;
