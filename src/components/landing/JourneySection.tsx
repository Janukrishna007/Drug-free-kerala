import React from "react";

export const JourneySection = () => {
  return (
    <section id="journey" className="flex flex-col items-center">
      <h2 className="text-[#3B3B3B] text-[40px] font-bold leading-[60px] text-center mt-[89px] max-md:max-w-full max-md:mt-10">
        <span className="font-medium">Our Journey:</span> From Darkness to Light
      </h2>
      <div className="bg-blend-normal self-center w-[691px] max-w-full text-base text-[#888] font-medium mt-[9px] px-[13px] py-0.5">
        <p className="text-center max-md:max-w-full">
          Witness the transformation journey from the challenges of substance
          abuse to the
        </p>
        <p className="text-center mt-1 max-md:max-w-full">
          empowerment of creative engagement through photos and videos.
        </p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe155c2096b387592bb83c0e1db1eff96dbfbc8?placeholderIfAbsent=true"
        alt="Journey"
        className="aspect-[0.8] object-contain w-[850px] self-center max-w-full mt-9"
      />
    </section>
  );
};
