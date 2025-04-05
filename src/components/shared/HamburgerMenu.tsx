import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onPledgeClick: () => void;
}

const menuVariants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
      opacity: { duration: 0.2 }
    }
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
      opacity: { duration: 0.4 }
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
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
    onClose();
    
    // Handle home page navigation differently
    if (href === "/") {
      window.location.href = href;
      return;
    }

    // For section navigation, use smooth scrolling
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100); // Small delay to ensure the menu closes first
    }
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-[100dvh] w-full md:w-[380px] bg-[#0A0A0A] z-50 overflow-hidden shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            onAnimationComplete={() => {
              if (!isOpen) setShouldRender(false);
            }}
          >
            <div className="h-full flex flex-col relative px-8 py-16">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
              </motion.button>

              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 mt-12"
              >
                <ul className="flex flex-col gap-10 items-center md:items-start">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      variants={itemVariants}
                      custom={index}
                      className="w-full overflow-hidden"
                    >
                      <div className="group relative w-full text-center md:text-left">
                        <button
                          onClick={() => handleNavigate(item.href)}
                          className="relative text-2xl text-white/70 hover:text-white transition-all duration-300 py-2"
                        >
                          {item.label}
                        </button>
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5CB769] transform origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>

              {/* Pledge Button */}
              <motion.div
                variants={itemVariants}
                className="mt-auto pt-8 border-t border-white/10"
              >
                <motion.button
                  onClick={handlePledgeClick}
                  className="w-full bg-[#5CB769] hover:bg-[#4ca357] py-4 rounded-lg font-light text-base text-white transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative tracking-wide">Take the Pledge</span>
                  <motion.span
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 