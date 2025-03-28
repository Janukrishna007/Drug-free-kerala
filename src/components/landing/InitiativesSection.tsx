import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InitiativeCardProps {
  title: string;
  image: string;
  description: string;
  onClick: () => void;
  isActive: boolean;
  index: number;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ 
  title, 
  image, 
  description, 
  onClick, 
  isActive,
  index 
}) => {
  return (
    <motion.div
      className={`relative w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'z-20' : 'z-10'}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      <div className="relative aspect-[3/5] w-full overflow-hidden rounded-2xl group">
        <motion.img
          src={image}
          alt={title}
          className="absolute h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ y: 20, opacity: 0.8 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-light"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const InitiativesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const initiatives = [
    {
      title: "GTech Initiative",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c5c00dd34f7c1d7517203f7bbfdef01fc10b3e9?placeholderIfAbsent=true",
      description: "Leading the charge in creating a drug-free Kerala through technology-driven solutions, community engagement, and innovative awareness campaigns. GTech's initiative focuses on leveraging digital platforms to reach and educate the youth."
    },
    {
      title: "MuLearn Movement",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6703e9897cae4545820310c498f68350cf6c5957?placeholderIfAbsent=true",
      description: "Empowering students through peer-to-peer learning and mentorship programs. The MuLearn movement creates a supportive environment where students can share experiences, learn from each other, and build resilience against drug abuse."
    },
    {
      title: "Company Initiative",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c5c00dd34f7c1d7517203f7bbfdef01fc10b3e9?placeholderIfAbsent=true",
      description: "Corporate sector's commitment to creating a drug-free workplace and community. Through employee engagement programs, awareness campaigns, and support systems, companies are actively contributing to the movement."
    },
    {
      title: "Campus Initiative",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca5390300001c223043589766a1fa07a49f79c7d?placeholderIfAbsent=true",
      description: "Transforming educational institutions into hubs of drug-free culture. The campus initiative focuses on creating awareness, providing counseling services, and organizing engaging activities to keep students away from drugs."
    }
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="initiatives" className="bg-white w-full py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-[#1E1E1E] text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Key Initiatives
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
              onClick={() => handleCardClick(index)}
              isActive={activeCard === index}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 