import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Copyright, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = ({ onPledgeClick }: { onPledgeClick: () => void }) => {
  return (
    <footer id="contact" className="bg-black w-full overflow-hidden mt-20 pt-12 pb-8 rounded-t-[50px] md:rounded-t-[80px]">
      <div className="container mx-auto px-10 md:px-8">
        {/* Logo Row */}
   
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Column - About */}
          <div className="md:col-span-3 flex flex-col">
          <div className="flex justify-start mb-5">
          <img
            src="/images/dugfreekeralwhite.png"
            alt="Drug Free Kerala Logo"
            className="h-16 object-contain"
          />
        </div>
            <p className="text-[rgba(242,242,242,1)] text-base font-normal leading-6 mb-6">
              Empowering youth through innovation, creativity,
              and purpose-driven engagement to create a drug-free society across Kerala.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-auto">
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <a href="https://www.facebook.com/gtechmulearn/photos/?ref=page_internal&_rdr">
                  <Facebook className="h-4 w-4 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <a href="https://x.com/GtechMulearn">
                  <Twitter className="h-4 w-4 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <a href="https://www.instagram.com/mulearn.official/">
                  <Instagram className="h-4 w-4 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <a href="http://www.linkedin.com/company/gtechmulearn/">
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <a href="https://chat.whatsapp.com/BoA0aibDSqNL60qBRslCww">
                  <FaWhatsapp className="h-4 w-4 text-white" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Center Column - Quick Links */}
          <div className="md:col-start-8 md:col-end-10 flex flex-col ">
            <h3 className="text-[#F2F2F2] font-medium text-base mb-4">
              Quick Links
            </h3>
            <ul className="text-[rgba(242,242,242,1)] font-normal space-y-3">
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors">
                <a href="#about" className="inline-block hover:underline">About</a>
              </li>
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors">
                <a href="#initiatives" className="inline-block hover:underline">Initiatives</a>
              </li>
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors">
                <a href="#journey" className="inline-block hover:underline">Journey</a>
              </li>
   
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors ">
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)] hover:underline inline-block"
                  onClick={onPledgeClick}
                >
                  Take the Pledge
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-[#F2F2F2] font-medium text-base mb-4">
              Contact Us
            </h3>
            
            <div className="flex items-center gap-3 text-[rgba(242,242,242,1)] font-light mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <a
                href="mailto:info@mulearn.org"
                className="hover:text-[rgba(92,183,105,1)] transition-colors"
              >
                info@mulearn.org
              </a>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <address className="text-[rgba(242,242,242,1)] text-base font-light leading-6 not-italic">
                Technopark, Kazhakoottam, Trivandrum
                <br />
                695581, Kerala, India.
              </address>
            </div>
            
            <div className="flex items-center gap-3 text-[rgba(242,242,242,1)] font-light mt-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <a
                href="tel:+918590276004"
                className="hover:text-[rgba(92,183,105,1)] transition-colors"
              >
                +91 8590276004
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-[rgba(242,242,242,1)] font-normal">
              <Copyright className="w-4 h-4 text-white shrink-0" />
              <p>
                2025 Drug Free Kerala. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://mulearn.org/privacypolicy"
                className="text-sm text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)] transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://mulearn.org/termsandconditions"
                className="text-sm text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)] transition-colors"
              >
                Terms of Service
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <img
                src="/images/gtech.png"
                alt="GTech Logo"
                className="h-6 object-contain"
              />
              <img
                src="/images/mulearn-white-logo.png"
                alt="MuLearn Logo"
                className="h-6 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
