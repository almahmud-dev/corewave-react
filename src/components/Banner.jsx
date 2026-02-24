import heroimg from '../assets/Images/Hero/Hero.png'
import { GoVideo } from "react-icons/go";

const Banner = () => {
  return (
    <>
    <section className="relative bg-[#EFFFF9] py-20 min-h-175 flex items-center"> 
    <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row gap-5 items-center justify-between'>
            
            {/* Left Content Side */}
            <div className='max-w-162.5'>
                <h1 className='text-[#1B1B1B] text-[60px] font-normal leading-[1.2]'>
                    Empower Your Team <br /> 
                    <span className='font-bold'>With CoreWave's</span>
                </h1>
                
                <p className='text-[#717171] text-[20px] font-normal leading-normal font-lato mt-6 mb-10 max-w-137.5'>
                    Boost Productivity and Wellness in Your Organization with 
                    CoreWave's Advanced Tools and Techniques
                </p>
                
                <div className="flex items-center gap-5">
                    {/* Explore More Button */}
                    <button className='bg-[#06C279] text-[16px] text-white font-semibold 
                        rounded-sm py-3.75 px-8.75 font-lato hover:bg-[#05a868] transition-all'>
                        Explore More
                    </button>

                    {/* Watch Video Button */}
                    <button className='flex items-center gap-2 border border-[#06C279] text-[#1B1B1B] 
                        text-[16px] font-semibold rounded-sm py-3.75 px-8.75 font-lato hover:bg-[#06C279]/10 transition-all'>
                        <span className="text-[#06C279] text-xl"><GoVideo /></span> 
                        Watch Video
                    </button>
                </div>
            </div>

            {/* Right Image Side */}
            <div className="relative">
                {/* Image-er pichone oi light green circle-ti add korar jonno niche ekta div dewa holo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-112.5 h-112.5 border-[40px] border-[#D1F7E9] rounded-full -z-10"></div>
                <img src={heroimg} alt="Hero Image" className="relative z-10 w-full max-w-135.25" />
            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default Banner