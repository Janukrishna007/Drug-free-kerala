"use client";
import React from "react";

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-4 pb-20 mt-8 w-full bg-grey-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1226px] max-md:max-w-full">
        <h2 className="self-center text-4xl font-medium text-black">
           Who <span className="font-bold">We are?</span>
        </h2>
        <div className="flex flex-wrap gap-5 justify-center mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="w-[570px] h-[180px] p-14 bg-white rounded-[30px] relative overflow-hidden shadow-sm group transition-all duration-300 hover:shadow-md">
            <p className="text-small text-center items-center justify-center
            ">
              We are committed to raising awareness against 
              drug abuse through education, media 
              campaigns, and active community participation .
            </p>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-400 rounded-tr-full transition-transform duration-500 ease-out group-hover:scale-[1.75]"></div>
          </div>
          
          <div className="w-[570px] h-[180px] p-14 bg-white rounded-[30px] relative overflow-hidden shadow-sm group transition-all duration-300 hover:shadow-md">
            <p className="text-small text-center">
            Our initiative involves sensitization programs for students, parents, and teachers, along with peer mentoring, community engagement, and rehabilitation support. 
            </p>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-400 rounded-tr-full transition-transform duration-500 ease-out group-hover:scale-[1.75]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;