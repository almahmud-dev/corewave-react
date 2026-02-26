import experience from '../assets/Images/Experience/experience.png'

const Experience = () => {
  return (
    <>
    <section className='pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-21.25 lg:pb-25'>
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-10 lg:gap-35.25 items-center">
      
      {/* Left Content Side */}
      {/* md:w-1/2 ব্যবহার করা হয়েছে যাতে বড় স্ক্রিনে জায়গা সমান থাকে */}
      <div className="w-full md:w-1/2 lg:max-w-131.25 text-center md:text-left">
        <h1
          className="text-[#1B1B1B] text-[32px] sm:text-[38px] md:text-[40px] lg:text-[45px]
          font-semibold leading-[1.2] md:leading-13 font-lato"
        >
          Experience the power of Corewave
        </h1>

        <p
          className="text-[#7B7B7B] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal
          leading-relaxed font-lato mt-4 md:mt-6 mb-8 md:mb-10 max-w-137.5 mx-auto md:mx-0"
        >
          Are you ready to take your business to the next level? Look no further than Corewave. 
          Our innovative technology and expert team can help you unlock your business's full potential. 
          By harnessing the power of Corewave, you can streamline your operations, improve efficiency.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center
          md:justify-start gap-4 md:gap-5"
        >
          {/* Learn More Button */}
          {/* মোবাইলে বাটনটি পুরো উইডথ (w-full) থাকবে */}
          <button
            className="w-full sm:w-auto bg-[#DAF6EB] text-[#06C279]
            font-semibold rounded-[5px] py-3.5 px-10 hover:bg-[#06C279] hover:text-white transition-all"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Side */}
      <div
        className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end"
      >
        <img
          src={experience}
          alt="Experience Corewave"
         
          className="w-full max-w-[320px] sm:max-w-100 md:max-w-none h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>
    </>
  )
}

export default Experience