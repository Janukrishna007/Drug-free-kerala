import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onPledgeClick: () => void;
}

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose, onPledgeClick }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const handleNavigate = (href: string) => {
    window.location.href = href;
    onClose();
  };

  const handlePledgeClick = () => {
    onPledgeClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {shouldRender && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-gradient-to-b from-black via-black/95 to-[#1a1a1a] z-50 overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            onAnimationComplete={() => {
              if (!isOpen) setShouldRender(false);
            }}
          >
            <div className="h-full p-12 flex flex-col relative">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-5 h-5">
                  <motion.span
                    className="absolute top-1/2 left-0 w-full h-[2px] bg-white rounded-full -translate-y-1/2"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 45 }}
                  />
                  <motion.span
                    className="absolute top-1/2 left-0 w-full h-[2px] bg-white rounded-full -translate-y-1/2"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -45 }}
                  />
                </div>
              </motion.button>

              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 mt-8 "
              >
                <ul className=" text-center flex flex-col gap-8 h-full justify-around ">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      variants={itemVariants}
                      custom={index}
                      className="overflow-hidden"
                    >
                      <button
                        onClick={() => handleNavigate(item.href)}
                        className="relative text-4xl font-medium text-white/90 hover:text-white transition-colors group"
                      >
                        <span className="relative z-10 inline-block">{item.label}</span>
                        <motion.div
                          className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#5CB769] rounded-full origin-left"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>

              {/* Certificate Lookup Button */}
              <motion.div
                variants={itemVariants}
                className="mt-auto"
              >
                <motion.button
                  onClick={() => handlePledgeClick()}
                  className="w-full bg-green-500 hover:bg-[#52A35F]  py-5 rounded-xl font-medium text-lg transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 text-white">Take the Pledge</span>

               
                </motion.button>
              
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 