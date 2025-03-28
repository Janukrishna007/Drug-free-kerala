import React from "react";
import { motion } from "framer-motion";

export const PillarsSection = () => {
  return (
    <section className="bg-[rgba(237,248,239,1)] w-full py-16 md:py-20">
      <div className="w-full">
        <div className="text-center mb-12 px-4 md:px-8">
          <h2 className="text-[#1E1E1E] text-3xl md:text-4xl font-bold mb-4">
            Our <span className="font-medium">Three Pillars</span>
          </h2>
          <p className="text-[#1E1E1E] text-base font-medium max-w-3xl mx-auto">
            A comprehensive approach to creating drug-free environments through
            awareness, prevention, and action.
          </p>
        </div>

        <div className="space-y-6">
          {/* Pillar 1: Alert */}
          <motion.div 
            className="bg-[rgba(219,243,223,1)] p-6 flex flex-row items-center hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ 
              backgroundColor: "rgba(209,243,213,1)",
              transition: { duration: 0.2 }
            }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <div className="w-16 text-[#1E1E1E] font-medium text-center pl-4 md:pl-8 lg:pl-20">
              01
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4 shadow-sm">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ scale: 0.7, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </motion.svg>
            </div>
            <div className="flex-1 pr-4 md:pr-8 lg:pr-20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-bold">Alert</h3>
                <p className="text-[#1E1E1E] text-base md:text-lg font-medium md:max-w-md">
                  Mechanism to alert on substance abuse
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Awareness */}
          <motion.div 
            className="bg-[rgba(219,243,223,1)] p-6 flex flex-row items-center hover:shadow-xl transition-all"
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ 
              backgroundColor: "rgba(209,243,213,1)",
              transition: { duration: 0.2 }
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <div className="w-16 text-[#1E1E1E] font-medium text-center pl-4 md:pl-8 lg:pl-20">
              02
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4 shadow-sm">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ rotate: -20, opacity: 0.5 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </motion.svg>
            </div>
            <div className="flex-1 pr-4 md:pr-8 lg:pr-20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-bold">Awareness</h3>
                <p className="text-[#1E1E1E] text-base md:text-lg font-medium md:max-w-md">
                  Comprehensive awareness programs for students, parents, and teachers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Action */}
          <motion.div 
            className="bg-[rgba(219,243,223,1)] p-6 flex flex-row items-center hover:shadow-xl transition-all"
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ 
              backgroundColor: "rgba(209,243,213,1)",
              transition: { duration: 0.2 }
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <div className="w-16 text-[#1E1E1E] font-medium text-center pl-4 md:pl-8 lg:pl-20">
              03
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4 shadow-sm">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ y: 10, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </motion.svg>
            </div>
            <div className="flex-1 pr-4 md:pr-8 lg:pr-20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-bold">Action</h3>
                <p className="text-[#1E1E1E] text-base md:text-lg font-medium md:max-w-md">
                  Taking concrete steps through support services and engagement
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
