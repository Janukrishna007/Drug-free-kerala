import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InitiativeCardProps {
  title: string;
  image: string;
  description: string;
  index: number;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ 
  title, 
  image, 
  description,
  index 
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivation = (active: boolean) => {
    setIsActive(active);
  };

  return (
    <motion.div
      className="relative w-full md:w-[calc(40%-0.5rem)] lg:w-[calc(20%-0.75rem)] overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      layout
      onClick={() => handleActivation(!isActive)}
      onHoverStart={() => handleActivation(true)}
      onHoverEnd={() => handleActivation(false)}
    >
      <div className="relative aspect-[3/5] w-full overflow-hidden rounded-2xl group">
        <motion.img
          src={image}
          alt={title}
          className="absolute h-full w-full object-cover transition-all duration-500"
          animate={{
            scale: isActive ? 1.1 : 1
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: isActive 
              ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.1) 100%)" 
              : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 60%, transparent 100%)"
          }}
          transition={{ duration: 0.4 }}
        ></motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <motion.h3 
            className="text-xl font-bold mb-2"
            animate={{
              y: isActive ? -8 : 0,
              scale: isActive ? 1.05 : 1
            }}
            transition={{ duration: 0.4 }}
          >
            {title}
          </motion.h3>
          
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ 
                  duration: 0.4,
                  opacity: { duration: 0.25 },
                  height: { duration: 0.4 }
                }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {/* Animated separator line with glowing effect */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-white/30 via-white/90 to-white/30 mb-3 rounded-full"
                    initial={{ width: 0, x: -20 }}
                    animate={{ width: 60, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeOut" 
                    }}
                  />
                  
                  {/* Animated description with word-by-word reveal */}
                  <div 
                    className="text-sm font-light leading-relaxed text-white/90 relative"
                  >
                    {description.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-1"
                        initial={{ 
                          opacity: 0, 
                          y: 10,
                          scale: 0.95
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          scale: 1
                        }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.15 + i * 0.02,
                          ease: "easeOut" 
                        }}
                      >
                        {word}{' '}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export const InitiativesSection = () => {
  const initiatives = [
    {
      title: "GTECH Initiative",
      image: "images/GTech Initiative.png",
      description: "Empowering youth with technical and artistic skills provides a strong defense against drug abuse by fostering purpose and self-worth. Skill-building programs that enhance problem-solving and emotional regulation create resilience against negative influences. Through workshops and career- oriented camps, young minds stay engaged, responsible, and socially aware, reducing the likelihood of drug dependency."
    },
    {
      title: "µlearn Movement",
      image: "images/MuLearn movement.png",
      description: "Harnessing peer influence, we promote drug prevention through leadership programs like the Near Peer Buddy System. Student-led campaigns, role model initiatives, and peer counseling empower youth. Involvement in school governance, social clubs, and leadership roles fosters accountability, guiding them toward a drug-free lifestyle."
    },
    {
      title: "Social Engagement",
      image: "images/Social Engagement.png",
      description: "Online platforms and social media help combat substance abuse. Instagram, Facebook, and YouTube share impactful stories, videos, and awareness challenges. Games, comics, and virtual communities engage younger audiences. A dedicated website provides drug prevention resources, anonymous reporting, and virtual counseling for easy access to anti-drug support."
    },
    {
      title: "Community Engagement",
      image: "images/community management.png",
      description: "A strong community is key to fighting substance abuse. We're building a network of NGOs, law enforcement, schools, and local groups for a safer environment.Parent support groups, neighborhood watch programs, and awareness drives foster collective responsibility, while social clubs, religious institutions, and public figures help spread awareness."
    }
  ];

  return (
    <section id="initiatives" className="bg-white w-full py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-[#1E1E1E] text-3xl md:text-4xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#1E1E1E] text-3xl md:text-4xl font-medium mb-4">
            Key <span className="font-bold">Initiatives</span>
          </h2>
          </motion.h2>
          <motion.p 
            className="text-black text-base font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive programs that address different aspects of drug abuse prevention and rehabilitation
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              title={initiative.title}
              image={initiative.image}
              description={initiative.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};