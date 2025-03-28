import React from "react";

export const PillarsSection = () => {
  return (
    <section className="bg-[rgba(237,248,239,1)] w-full py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-[#1E1E1E] text-3xl md:text-4xl font-bold mb-4">
            Our <span className="font-medium">Three Pillars</span>
          </h2>
          <p className="text-[#1E1E1E] text-base font-medium max-w-3xl mx-auto">
            A comprehensive approach to creating drug-free environments through
            awareness, prevention, and action.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Pillar 1: Alert */}
          <div className="bg-[rgba(219,243,223,1)] rounded-lg p-6 flex flex-row items-center">
            <div className="w-16 text-[#1E1E1E] font-medium text-center">
              01
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div className="flex-1 flex justify-between items-center">
              <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-bold">Alert</h3>
              <p className="text-[#1E1E1E] text-base font-medium ml-4 md:ml-10 max-w-md">
                Mechanism to alert on substance abuse
              </p>
            </div>
          </div>

          {/* Pillar 2: Awareness */}
          <div className="bg-[rgba(219,243,223,1)] rounded-lg p-6 flex flex-row items-center">
            <div className="w-16 text-[#1E1E1E] font-medium text-center">
              02
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <div className="flex-1 flex justify-between items-center">
              <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-bold">Awareness</h3>
              <p className="text-[#1E1E1E] text-base font-medium ml-4 md:ml-10 max-w-md">
                Comprehensive awareness programs for students, parents, and teachers
              </p>
            </div>
          </div>

          {/* Pillar 3: Action */}
          <div className="bg-[rgba(219,243,223,1)] rounded-lg p-6 flex flex-row items-center">
            <div className="w-16 text-[#1E1E1E] font-medium text-center">
              03
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div className="flex-1 flex justify-between items-center">
              <h3 className="text-[#1E1E1E] text-2xl md:text-3xl font-bold">Action</h3>
              <p className="text-[#1E1E1E] text-base font-medium ml-4 md:ml-10 max-w-md">
                Taking concrete steps through support services and engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
