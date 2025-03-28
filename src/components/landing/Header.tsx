import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Journey", href: "#journey" },
  { label: "Certificate", href: "/create-certificate" },
  { label: "Contact", href: "#contact" }
];

interface HeaderProps {
  onPledgeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onPledgeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCertificateLookup, setShowCertificateLookup] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-b from-black/80 to-black/20 backdrop-blur-sm' : 'p-5'
    }`}>
      <div ref={menuRef} className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/">
            <img
              src="/images/drugfreekerala.png"
              alt="Drug Free Kerala Logo"
              className="h-10 object-contain"
            />
          </a>
          <div className="h-8 w-[1px] bg-white/20" /> {/* Divider */}
          <div className="flex flex-end items-center gap-5">
            <img
              src="/images/gtech.png"
              alt="GTech Logo"
              className="h-8 object-contain"
            />
            <img
              src="/images/mulearn.png"
              alt="MuLearn Logo"
              className="h-8 object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white/90 focus:bg-white/10 focus:text-white/90 focus:outline-none"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu> */}

        {/* Take the Pledge Button */}
        <div className="hidden">
          <Button 
            className="bg-[rgba(92,183,105,1)] hover:bg-[rgba(72,163,85,1)] text-white"
            onClick={onPledgeClick}
          >
            Take the Pledge
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="text-white p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          mobileMenuOpen 
            ? "opacity-100" 
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-[320px] bg-black transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen 
            ? "translate-x-0" 
            : "translate-x-full"
        }`}
      >
        <div className="h-full px-6 py-20">
          <nav className="flex flex-col h-full">
            <div className="space-y-6">
              {navigationItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-white text-lg py-2 hover:text-[rgba(92,183,105,1)] transition-colors duration-200 w-full block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="bg-[rgba(92,183,105,1)] hover:bg-[rgba(72,163,85,1)] text-white mt-4 w-full transition-colors duration-200 py-6"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onPledgeClick) onPledgeClick();
                }}
              >
                Take the Pledge
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto min-w-[200px] md:min-w-[230px] h-12 md:h-14 text-sm font-medium bg-white text-black hover:bg-gray-100 hover:text-black"
                onClick={() => setShowCertificateLookup(true)}
              >
                Look up your certificate
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="mt-auto pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm mb-4">In Association With</p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/gtech.png"
                  alt="GTech Logo"
                  className="h-8 object-contain"
                />
                <img
                  src="/images/mulearn.png"
                  alt="MuLearn Logo"
                  className="h-8 object-contain"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
