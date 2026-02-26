import experience from '../assets/Images/Experience/experience.png'

const Experience = () => {
  return (
    <>
    <section>
            <div className="container mx-auto py-10 lg:py-0 px-4">
              <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-35.25 items-center">
                {/* Left Content Side */}
                <div className="w-full lg:max-w-131.25 text-center md:text-left">
                  <h1
                    className="text-[#1B1B1B] text-[45px] sm:text-[40px] md:text-[38px]
                  font-semibold leading-[30px] md:leading-[54px] font-lato"
                  >
                    Experience the power of Corewave
                  </h1>
    
                  <p
                    className="text-[#7B7B7B] text-[16px] md:text-[20px] font-normal
                  leading-normal font-lato mt-4 md:mt-6 mb-8 md:mb-10 max-w-137.5 mx-auto md:mx-0"
                  >
                    Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency
                  </p>
    
                  <div
                    className="flex flex-col sm:flex-row items-center justify-center
                  md:justify-start gap-4 md:gap-5"
                  >
                    {/* Explore More Button */}
                    <button
                      className="w-full sm:w-auto bg-[#DAF6EB] text-[#06C279]
                    font-semibold rounded-[5px] py-3.5 px-8 hover:bg-[#05a868] transition-all"
                    >
                      Learn More
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