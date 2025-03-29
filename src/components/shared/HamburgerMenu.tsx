import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onPledgeClick: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
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
    
    // Prevent body scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
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
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => {
            if (!isOpen) setShouldRender(false);
          }}
        >
          {/* Backdrop */}
          <motion.div
            className={`absolute inset-0 bg-black/60 backdrop-blur-lg ${isOpen ? "" : "hidden"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            className="relative z-10 w-full max-w-4xl mx-auto px-6"
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-0 right-0 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
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
              className="flex flex-col items-center justify-center min-h-screen py-16"
            >
              <ul className="flex flex-col items-center space-y-8 mb-16">
                {navigationItems.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() =>{
                        
                        handleNavigate(item.href) 
                        
                      } }
                      className="relative text-4xl sm:text-5xl font-medium text-white/90 hover:text-white transition-colors group"
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

              {/* Take the Pledge Button */}
              <motion.div
                variants={itemVariants}
                className="w-full max-w-xs"
              >
                <motion.button
                  onClick={handlePledgeClick}
                  className="w-full bg-[#52A35F] hover:bg-green-500 py-5 rounded-xl font-medium text-lg transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 text-white">Take the Pledge</span>
                </motion.button>
              </motion.div>
            </motion.nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 