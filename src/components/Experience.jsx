import experience from '../assets/Images/Experience/experience.png'

const Experience = () => {
  return (
    <>
    <section className="relative bg-[#EFFFF9] py-10 md:py-20 min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto py-10 lg:py-0 px-4">
              <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-35.25 items-center">
                {/* Left Content Side */}
                <div className="w-full lg:max-w-131.25 text-center md:text-left">
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
                    {/* Explore More Button */}
                    <button
                      className="w-full sm:w-auto bg-[#06C279] text-white
                    font-semibold rounded-[5px] py-3.5 px-8 hover:bg-[#05a868] transition-all"
                    >
                      Explore More
                    </button>
    
                    {/* Watch Video Button */}
                    <button
                      className="w-full sm:w-auto flex items-center justify-center
                    gap-2 border-2 border-[#06C279] text-[#1B1B1B] font-semibold
                    rounded-[5px] py-3.5 px-8 hover:bg-[#06C279]/10 transition-all"
                    >
                      <span className="text-[#06C279] text-[24px]">
                        
                      </span>
                      Watch Video
                    </button>
                  </div>
                </div>
    
                {/* Right Image Side */}
                <div
                  className="relative mt-12 md:mt-0 w-full max-w-100
                md:max-w-none"
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2
                  -translate-y-1/2 w-70 h-70 md:w-112.5 md:h-112.5 border-20
                  md:border-40 border-[#D1F7E9] rounded-full -z-10"
                  ></div>
                  <img
                    src={experience}
                    alt="Hero Image"
                    className="relative z-10 w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Experience