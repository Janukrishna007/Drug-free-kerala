import React from "react";
import { motion } from "framer-motion";

export const PillarsSection = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-[rgba(237,248,239,1)] w-full py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1E1E1E] text-3xl md:text-4xl font-medium mb-4">
            Our <span className="font-bold">Three Pillars</span>
          </h2>
          <p className="text-[#1E1E1E] text-base font-medium max-w-3xl mx-auto">
            A comprehensive approach to creating drug-free environments through
            awareness, prevention, and action.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Pillar 1: Alert */}
          <motion.div 
            className="bg-[rgba(219,243,223,1)] rounded-lg p-6 flex flex-row items-center hover:shadow-xl transition-all relative overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ 
              scale: 1.03, 
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
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              initial={{ opacity: 0, x: -200 }}
              whileHover={{ opacity: 0.3, x: 400 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            />
            
            <motion.div 
              className="w-16 text-[#1E1E1E] font-medium text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              01
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4 shadow-sm"
              whileHover={{ scale: 1.1, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
              animate={{ 
                boxShadow: ["0 2px 4px rgba(0,0,0,0.1)", "0 6px 12px rgba(0,0,0,0.15)", "0 2px 4px rgba(0,0,0,0.1)"]
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                }
              }}
            >
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
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-center flex-col md:flex-row gap-4 space-between justify-between">
                <motion.h3 
                  className="text-[#1E1E1E] text-2xl md:text-3xl font-bold"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.2 }}
                >
                  Alert
                </motion.h3>
                <motion.p 
                  className="text-[#1E1E1E] text-base md:text-lg font-medium max-w-md mr-8"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.3 }}
                >
                  Mechanism to alert on substance abuse
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Awareness */}
          <motion.div 
            className="bg-[rgba(219,243,223,1)] rounded-lg p-6 flex flex-row items-center hover:shadow-xl transition-all relative overflow-hidden"
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ 
              scale: 1.03, 
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
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              initial={{ opacity: 0, x: -200 }}
              whileHover={{ opacity: 0.3, x: 400 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            />
            
            <motion.div 
              className="w-16 text-[#1E1E1E] font-medium text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              02
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4 shadow-sm"
              whileHover={{ scale: 1.1, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
              animate={{ 
                boxShadow: ["0 2px 4px rgba(0,0,0,0.1)", "0 6px 12px rgba(0,0,0,0.15)", "0 2px 4px rgba(0,0,0,0.1)"]
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  repeatDelay: 0.2
                }
              }}
            >
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
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <motion.h3 
                  className="text-[#1E1E1E] text-2xl md:text-3xl font-bold"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.4 }}
                >
                  Awareness
                </motion.h3>
                <motion.p 
                  className="text-[#1E1E1E] text-base md:text-lg font-medium max-w-md"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.5 }}
                >
                  Comprehensive awareness programs for students, parents, and teachers
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Action */}
          <motion.div 
            className="bg-[rgba(219,243,223,1)] rounded-lg p-6 flex flex-row items-center hover:shadow-xl transition-all relative overflow-hidden"
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ 
              scale: 1.03, 
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
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              initial={{ opacity: 0, x: -200 }}
              whileHover={{ opacity: 0.3, x: 400 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            />
            
            <motion.div 
              className="w-16 text-[#1E1E1E] font-medium text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              03
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4 shadow-sm"
              whileHover={{ scale: 1.1, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
              animate={{ 
                boxShadow: ["0 2px 4px rgba(0,0,0,0.1)", "0 6px 12px rgba(0,0,0,0.15)", "0 2px 4px rgba(0,0,0,0.1)"]
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  repeatDelay: 0.4
                }
              }}
            >
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
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <motion.h3 
                  className="text-[#1E1E1E] text-2xl md:text-3xl font-bold"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.6 }}
                >
                  Action
                </motion.h3>
                <motion.p 
                  className="text-[#1E1E1E] text-base md:text-lg font-medium max-w-md"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.7 }}
                >
                  Taking concrete steps through support services and engagement
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
