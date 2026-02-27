import heroimg from "../assets/Images/Hero/Hero.png";
import { GoVideo } from "react-icons/go";

const Banner = () => {
  return (
    <>
      {/* items-stretch এর বদলে items-center ব্যবহার করা হয়েছে যাতে বড় স্ক্রিনেও কন্টেন্ট মাঝে থাকে */}
     <section className="relative bg-[#EFFFF9] 
pt-[90px] 
lg:pt-[100px] 
flex items-center overflow-hidden">

  <div className="container mx-auto px-4 relative z-20 flex 
    pt-0 
    sm:pt-[100px] 
    md:pt-[80px] 
    lg:pt-0">

    <div className="flex flex-col lg:flex-row 
      gap-10 lg:gap-20 
      items-center 
      w-full">

      {/* Left Content */}
      <div className="w-full lg:max-w-[520px] 
        text-center lg:text-left">

        <h1
          className="text-[#1B1B1B] 
          text-[36px] sm:text-[40px] md:text-[48px]
          font-normal leading-tight md:leading-[1.2]
          font-lato"
        >
          Empower Your Team
          <span className="block font-bold">
            With CoreWave's
          </span>
        </h1>

        <p
          className="text-[#717171] 
          text-[16px] md:text-[20px]
          leading-normal 
          font-lato 
          mt-4 md:mt-6 
          mb-8 md:mb-10 
          max-w-[550px] 
          mx-auto lg:mx-0"
        >
          Boost Productivity and Wellness in Your Organization with
          CoreWave's Advanced Tools and Techniques
        </p>

        <div
          className="flex flex-col sm:flex-row
          items-center 
          justify-center lg:justify-start
          gap-4 md:gap-5"
        >
          <button
            className="w-full sm:w-auto 
            bg-[#06C279] text-white
            font-semibold 
            rounded-md
            py-3 px-8
            font-lato 
            hover:bg-[#05a868] 
            transition-all"
          >
            Explore More
          </button>

          <button
            className="w-full sm:w-auto 
            flex items-center justify-center
            gap-2 
            border-2 border-[#06C279]
            text-[#1B1B1B] 
            font-semibold
            rounded-md
            py-3 px-8
            font-lato 
            hover:bg-[#06C279]/10 
            transition-all"
          >
            <span className="text-[#06C279] text-[22px]">
              <GoVideo />
            </span>
            Watch Video
          </button>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="relative w-full flex-1 
        flex justify-center lg:justify-end 
        items-end 
        min-h-[300px] lg:min-h-[500px]">

        {/* Background Circle */}
        <div
          className="hidden lg:block 
          absolute top-1/2 left-1/2
          -translate-x-[60%] lg:-translate-y-[45%]
          xl:-translate-x-1/2 xl:-translate-y-1/2
          w-[300px] h-[300px]
          lg:w-[320px] lg:h-[320px]
          xl:w-[450px] xl:h-[450px]
          border-[20px] lg:border-[25px] xl:border-[40px]
          border-[#D1F7E9]
          rounded-full 
          -z-10"
        ></div>

        <img
          src={heroimg}
          alt="Hero"
          className="relative z-10 
          w-auto h-auto
          max-h-[50vh] 
          md:max-h-[60vh] 
          lg:max-h-[75vh]
          object-contain 
          block"
        />
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default Banner;
