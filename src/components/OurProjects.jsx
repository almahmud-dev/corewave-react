import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('UI/UX Design');
  const [loading, setLoading] = useState(true);

  const tabs = ['Mobile App', 'Web Development', 'UI/UX Design', 'Graphic Design', 'Motion Graphic'];

  // ১. API থেকে ডেটা ফেচ করা
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
        const data = await response.json();
        const formattedData = data.map((item, index) => ({
          id: item.id,
          title: item.title.slice(0, 25),
          desc: "Web development is the art of creating engaging and visually appealing websites",
          category: tabs[index % tabs.length],
          image: `https://picsum.photos/seed/${item.id + 100}/600/400`
        }));

        setProjects(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProjects = projects.filter(item => item.category === activeTab);

  return (
    <section className='pt-[91px] pb-20 bg-white font-sans overflow-hidden'>
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className='text-center mb-16'>
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-[45px] text-[#1B1B1B] leading-tight font-bold mb-10'
          >
            Our Latest Project
          </motion.h3>
          
          {/* Tab Navigation Container */}
          <div className="relative border-b-2 border-[#D9D9D9] mb-16 px-2">
            <div className="flex justify-start md:justify-center items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-[18px] relative">
              
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onMouseEnter={() => setActiveTab(tab)} // Hover করলে চেঞ্জ হবে
                  className={`cursor-pointer text-lg font-medium relative whitespace-nowrap px-2 transition-colors duration-300 z-10
                    ${activeTab === tab ? 'text-[#00C37A]' : 'text-[#7E7E7E]'}`}
                >
                  {tab}
                  
                  {/* ২. Framer Motion Sliding Underline (ম্যাজিক এখানে) */}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="underline" 
                      className="absolute left-0 right-0 bottom-[-20px] h-[4px] bg-[#00C37A] rounded-full z-20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ৩. Project Grid with Smooth Entrance */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
               className="h-12 w-12 border-t-2 border-b-2 border-[#00C37A] rounded-full"
             />
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group flex flex-col items-center"
                >
                  {/* Image Area */}
                  <div className="rounded-[24px] overflow-hidden mb-8 w-full bg-gray-100 shadow-sm transition-shadow hover:shadow-xl">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-[280px] object-cover cursor-pointer" 
                    />
                  </div>

                  {/* Text Area */}
                  <div className="text-center px-2">
                    <h4 className="text-[24px] font-bold text-[#1B1B1B] mb-3 capitalize">
                      {item.title}
                    </h4>
                    <p className="text-[#7E7E7E] text-[16px] leading-[26px] max-w-[340px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00C37A] text-white font-bold py-4 px-10 rounded-lg shadow-md hover:bg-[#00a868] transition-colors"
          >
            View All Projects
          </motion.button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default OurProjects;