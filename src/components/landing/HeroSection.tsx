import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CertificateLookup } from '@/components/certificate/CertificateLookup';
import CountUp from 'react-countup';


interface HeroSectionProps {
  onPledgeClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPledgeClick }) => {
  const [showCertificateLookup, setShowCertificateLookup] = useState(false);
  const [pledgeCount, setPledgeCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPledgeCount = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://mulearn.org/api/v1/drugfreekerala/total/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Raw API response:', data);
  
        
        // Check the exact path to count in the response
        setPledgeCount(data.total || 0);
        
      } catch (error) {
        console.error('API Error:', error);
        setPledgeCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPledgeCount();
    const interval = setInterval(fetchPledgeCount, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden min-h-screen flex items-center px-4 md:px-8 lg:px-20">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8684813001112ddca76c9158312ab954aeb0847?placeholderIfAbsent=true"
          alt="Hero background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="container mx-auto relative py-20">
          <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
            {/* Main content container with improved centering */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 mt-10 mb-10">
              {/* Pledge count section with fixed width */}
              <div className="flex flex-col items-center text-white md:w-1/3">
                <div className="text-8xl md:text-8xl font-semibold">
                  <CountUp
                    start={0}
                    end={pledgeCount}
                    duration={2.5}
                  />
                </div>
                <div className="text-3xl md:text-5xl font-medium mt-4">Pledges</div>
              </div>

              {/* Text section with fixed width */}
              <div className="text-[rgba(244,244,244,1)] text-3xl md:text-5xl font-bold leading-tight text-center md:text-left md:w-1/2">
                United{" "}
                <span className="text-[rgba(92,183,105,1)]">
                  against addiction
                </span>
                <br />
                For us, for good
                <br />
                Ending addiction,
                <br />
                <span className="text-[rgba(92,183,105,1)]">
                  Towards a greater good
                </span>
              </div>
            </div>
            <p className="text-neutral-50 text-base font-medium text-center mt-2 max-w-3xl mx-auto">
              Our movement has one objective – to turn intoxicated lives into
              vibrant communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Button 
                className="w-full sm:w-auto min-w-[200px] md:min-w-[230px] h-12 md:h-14 text-sm font-medium bg-[rgba(92,183,105,1)] hover:bg-[rgba(82,163,95,1)]"
                onClick={onPledgeClick}
              >
                Take the Pledge
              </Button>
            </div>
            <div className="mt-6"></div>
          </div>
        </div>
      </section>

      {showCertificateLookup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setShowCertificateLookup(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <CertificateLookup onClose={() => setShowCertificateLookup(false)} />
          </div>
        </div>
      )}
    </>
  );
};
