import React from "react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black w-full overflow-hidden mt-20 pt-12 pb-8 rounded-t-[50px] md:rounded-t-[80px]">
      <div className="container mx-auto px-5 md:px-8">
        {/* Logo Row */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/drugfreekerala.png"
            alt="Drug Free Kerala Logo"
            className="h-16 object-contain"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column - About */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-[#F2F2F2] font-medium text-base mb-4">About the Movement</h3>
            <p className="text-[rgba(242,242,242,1)] text-base font-light leading-6 mb-6">
              Empowering youth through innovation, creativity,
              and purpose-driven engagement to create a drug-free society across Kerala.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-auto">
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b34d2a80ed16546a8cdc93c0e719206dd7df178?placeholderIfAbsent=true"
                  alt="Facebook"
                  className="aspect-[1] object-contain w-4 h-4"
                />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/078dea8327874463ea204f9d9d5e25c1f5f2b38c?placeholderIfAbsent=true"
                  alt="Twitter"
                  className="aspect-[1] object-contain w-4 h-4"
                />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/52f6ca1083382266f71d214a29099dfcfb3ac35f?placeholderIfAbsent=true"
                  alt="Instagram"
                  className="aspect-[1] object-contain w-4 h-4"
                />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/543e1c1b3ec5d921b75e0ff329bc381769a1ec10?placeholderIfAbsent=true"
                  alt="LinkedIn"
                  className="aspect-[1] object-contain w-4 h-4"
                />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-[30px] w-[30px] bg-white/10 rounded-full hover:bg-white/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2d42ef490efc9b07ed6527b9784d6dd7fbb6678?placeholderIfAbsent=true"
                  alt="YouTube"
                  className="aspect-[1] object-contain w-4 h-4"
                />
              </Button>
            </div>
          </div>
          
          {/* Center Column - Quick Links */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-[#F2F2F2] font-medium text-base mb-4">
              Quick Links
            </h3>
            <ul className="text-[rgba(242,242,242,1)] font-normal space-y-3">
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors">
                <a href="#about" className="inline-block">About</a>
              </li>
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors">
                <a href="#initiatives" className="inline-block">Initiatives</a>
              </li>
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors">
                <a href="#journey" className="inline-block">Journey</a>
              </li>
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors">
                <a href="#contact" className="inline-block">Contact</a>
              </li>
              <li className="hover:text-[rgba(92,183,105,1)] transition-colors">
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)]"
                  onClick={() => window.location.href = '#pledge'}
                >
                  Take the Pledge
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="md:col-span-5 flex flex-col">
            <h3 className="text-[#F2F2F2] font-medium text-base mb-4">
              Contact Us
            </h3>
            
            <div className="flex items-center gap-3 text-[rgba(242,242,242,1)] font-light mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f0c1316f055c6bb09945970f591073c296e22f?placeholderIfAbsent=true"
                  alt="Email"
                  className="w-5 h-5 object-contain"
                />
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
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/36bc6cc7f5add37c7151e9e69684277b3cee013f?placeholderIfAbsent=true"
                  alt="Location"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <address className="text-[rgba(242,242,242,1)] text-base font-light leading-6 not-italic">
                Technopark, Kazhakoottam, Trivandrum
                <br />
                695581, Kerala, India
              </address>
            </div>
            
            <div className="flex items-center gap-3 text-[rgba(242,242,242,1)] font-light mt-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <a
                href="tel:+919876543210"
                className="hover:text-[rgba(92,183,105,1)] transition-colors"
              >
                +91 987 654 3210
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-[rgba(242,242,242,1)] font-normal">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d4568bc5279843b1f031d4cc7694c60aac33c42?placeholderIfAbsent=true"
                alt="Copyright"
                className="aspect-[1] object-contain w-4 shrink-0"
              />
              <p>
                2025 Drug Free Kerala. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#privacy"
                className="text-sm text-[rgba(242,242,242,1)] hover:text-[rgba(92,183,105,1)] transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms"
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
                src="/images/mulearn.png"
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
