import React, { useState } from "react";
import { HamburgerMenu } from "@/components/shared/HamburgerMenu";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeaderProps {
  onPledgeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onPledgeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  );

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          backdropFilter: headerBlur
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
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
                  className="h-5 object-contain"
                />
                <img
                  src="/images/mulearn-white-logo.png"
                  alt="MuLearn Logo"
                  className="h-5 object-contain"
                />
              </div>

              {/* Divider */}
              <div className="h-8 w-[1px] bg-white/20" />

              {/* Hamburger Menu Button */}
              <motion.button
                className="relative w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6">
                  <motion.span
                    className="absolute top-0 left-0 w-full h-[2px] bg-white rounded-full origin-left"
                    animate={isMenuOpen ? 
                      { rotate: 45, width: "130%", top: "-1px" } : 
                      { rotate: 0, width: "100%", top: "-4px" }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="absolute top-1/2 left-0 w-full h-[2px] bg-white rounded-full -translate-y-1/2"
                    animate={isMenuOpen ? 
                      { opacity: 0, x: -8 } : 
                      { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full origin-left"
                    animate={isMenuOpen ? 
                      { rotate: -45, width: "130%", bottom: "-1px" } : 
                      { rotate: 0, width: "100%", bottom: "-4px" }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hamburger Menu Component */}
      <HamburgerMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onPledgeClick={onPledgeClick}
      />
    </>
  );
};
