import React, { useState } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { InitiativesSection } from "@/components/landing/InitiativesSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { Footer } from "@/components/landing/Footer";
import { PledgeForm } from "@/components/landing/PledgeForm";

const Index = () => {
  const [showPledgeForm, setShowPledgeForm] = useState(false);

  const handlePledgeClick = () => {
    setShowPledgeForm(true);
  };

  return (
    <div className="bg-[rgba(239,238,236,1)] flex flex-col min-h-screen">
      <Header onPledgeClick={handlePledgeClick} />
      <HeroSection onPledgeClick={handlePledgeClick} />
      <AboutSection />
      <PillarsSection />
      <InitiativesSection />
      <JourneySection />
      <Footer />
      
      {showPledgeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setShowPledgeForm(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <PledgeForm onClose={() => setShowPledgeForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
