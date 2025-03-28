import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HamburgerMenu } from "@/components/shared/HamburgerMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 left-0 right-0 z-30 backdrop-blur-sm transition-all duration-300"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Drug Free Kerala Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/images/drugfreekerala.png"
                alt="Drug Free Kerala Logo"
                className="h-10 object-contain"
              />
            </a>

            {/* Right Section: Partner Logos + Hamburger */}
            <div className="flex items-center gap-6">
              {/* Partner Logos */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/gtech.png"
                  alt="GTech Logo"
                  className="h-8 object-contain"
                />
                <img
                  src="/images/mulearn-white-logo.png"
                  alt="MuLearn Logo"
                  className="h-8 object-contain"
                />
              </div>

              {/* Divider */}
              <div className="h-8 w-[1px] bg-white/20" />

              {/* Hamburger Menu Button */}
              <motion.button
                className="relative w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-31"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6">
                  <motion.span
                    className="absolute w-full h-[2px] bg-white"
                    animate={isMenuOpen ? 
                      { rotate: 45, y: 0 } : 
                      { rotate: 0, y: -4 }
                    }
                  />
                  <motion.span
                    className="absolute w-full h-[2px] bg-white"
                    animate={isMenuOpen ? 
                      { opacity: 0 } : 
                      { opacity: 1 }
                    }
                  />
                  <motion.span
                    className="absolute w-full h-[2px] bg-white"
                    animate={isMenuOpen ? 
                      { rotate: -45, y: 0 } : 
                      { rotate: 0, y: 4 }
                    }
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <HamburgerMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};
