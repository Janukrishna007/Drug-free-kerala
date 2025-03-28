import React from "react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-[rgba(239,238,236,1)] w-full overflow-hidden py-28">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-2/5">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight">
                <span className="font-medium">Towards</span>
                <br />
                Drug-Free <span className="font-medium">Kerala</span>
              </h2>
              <p className="text-[rgba(82,91,101,1)] text-base font-medium leading-relaxed mt-6">
                A powerful alliance between Gtech and μLearn,
                empowering youth with factual information about
                drugs so that they can make informed decisions and live
                drug-free.
              </p>
              <div className="mt-10">
                <Button 
                  variant="outline"
                  className="min-w-[150px] h-12 text-sm font-medium bg-white text-black hover:bg-gray-100 hover:text-black"
                >
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <div className="relative aspect-video md:aspect-[16/9] w-full rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13b99c932a25d242f9f0574dd2cfc4038341b0e8?placeholderIfAbsent=true"
                alt="About background"
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white rounded-full p-5 transition-all duration-300 transform hover:scale-110">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05ac3dc982146770076765844b666bee5a3bf7e?placeholderIfAbsent=true"
                    alt="Play button"
                    className="w-10 h-10 object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
