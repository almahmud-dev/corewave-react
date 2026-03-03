import React, { useState } from 'react';
// ইমেজগুলো আপনার ফোল্ডার পাথ অনুযায়ী ইমপোর্ট করুন
import img1 from '../../src/assets/Images/Our_Projects/Project1.png';
import img2 from '../../src/assets/Images/Our_Projects/Project2.png';
import img3 from '../../src/assets/Images/Our_Projects/Project3.png';

const OurProjects = () => {
  // বর্তমানে কোন ট্যাব সিলেক্টেড আছে তা রাখার জন্য State
  const [activeTab, setActiveTab] = useState('UI/UX Design');

  // ট্যাবগুলোর লিস্ট
  const tabs = ['Mobile App', 'Web Development', 'UI/UX Design', 'Graphic Design', 'Motion Graphic'];

  // প্রতিটি ট্যাবের জন্য আলাদা ডাটা (ইমেজ, টাইটেল, ডেসক্রিপশন)
  const projectData = {
    'UI/UX Design': [
      { id: 1, img: img1, title: 'Portfolio Landing Page', desc: 'Web development is the art of creating engaging and visually appealing websites' },
      { id: 2, img: img2, title: 'Plant Landing Page', desc: 'Web development is the art of creating engaging and visually appealing websites' },
      { id: 3, img: img3, title: 'Real Estate Landing Page', desc: 'Web development is the art of creating engaging and visually appealing websites' },
    ],
    'Web Development': [
      { id: 1, img: img2, title: 'E-commerce Site', desc: 'High-performance web applications built with modern technologies.' },
      { id: 2, img: img3, title: 'SaaS Dashboard', desc: 'Scalable and secure web solutions for growing businesses.' },
      { id: 3, img: img1, title: 'Corporate Portal', desc: 'Professional websites tailored to your brand identity.' },
    ],
    'Mobile App': [
        { id: 1, img: img3, title: 'Fitness Tracker App', desc: 'User-friendly mobile experiences for iOS and Android.' },
        { id: 2, img: img1, title: 'Food Delivery UI', desc: 'Seamless mobile interfaces with a focus on usability.' },
        { id: 3, img: img2, title: 'Social Media App', desc: 'Modern app designs that engage and retain users.' },
    ],
    // বাকি ট্যাবগুলো খালি থাকলে UI/UX এর ডাটা বা অন্য কিছু দেখাতে পারেন
  };

  // ডিফোল্ট ডাটা হ্যান্ডলিং (যদি কোনো ট্যাবে ডাটা না থাকে)
  const currentProjects = projectData[activeTab] || projectData['UI/UX Design'];

  return (
    <section className='pt-[90px] pb-20 bg-white'>
      <div className="container mx-auto px-4">
        
        {/* টাইটেল এবং ট্যাব সেকশন */}
        <div className='text-center mb-16'>
          <h3 className='text-[45px] text-[#1B1B1B] leading-[54px] font-lato font-semibold mb-10'>
            Our Latest Project
          </h3>
          
          {/* ট্যাব লিস্ট উইথ বটম লাইন */}
          <div className="relative flex flex-wrap justify-center items-center gap-6 md:gap-10 border-b-2 border-[#D9D9D9] pb-[18px]">
            {tabs.map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer text-lg font-medium transition-all duration-300 relative 
                  ${activeTab === tab ? 'text-[#00C37A]' : 'text-[#7E7E7E]'}
                  ${activeTab === tab ? 
                    "after:content-[''] after:absolute after:left-0 after:bottom-[-20px] after:w-full after:h-[4px] after:bg-[#00C37A] after:rounded-full after:z-10" 
                    : ""
                  }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        {/* প্রজেক্ট গ্রিড (ইমেজ এবং টেক্সট) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentProjects.map((item) => (
            <div key={item.id} className="group flex flex-col items-center">
              
              {/* ইমেজের অংশ (Rounded & Clean) */}
              <div className="rounded-[24px] overflow-hidden mb-8 w-full">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              {/* টেক্সট সেকশন (শ্যাডো নেই, একদম ক্লিন) */}
              <div className="text-center px-2">
                <h4 className="text-[24px] font-bold text-[#1B1B1B] mb-3 font-lato">
                  {item.title}
                </h4>
                <p className="text-[#7E7E7E] text-[16px] leading-[26px] max-w-[340px]">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-14">
          <button className="bg-[#00C37A] hover:bg-[#00a868] text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurProjects;