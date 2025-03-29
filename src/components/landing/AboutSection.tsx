import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // YouTube video ID
  const videoId = "YhhrRVoizIM";
  
  // YouTube thumbnail (high quality)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Function to load YouTube API
  useEffect(() => {
    // Load the YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create YouTube player once API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (!playerContainerRef.current) return;
      
      new window.YT.Player(playerContainerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 0
        },
        events: {
          onReady: (event) => {
            // Store player instance in a ref
            window.ytPlayer = event.target;
            setIframeLoaded(true);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED || 
                      event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
            }
          }
        }
      });
    };

    // Add type definition for global YouTube player
    if (!window.ytPlayer) {
      window.ytPlayer = null;
    }

    // Cleanup
    return () => {
      window.onYouTubeIframeAPIReady = null;
      window.ytPlayer = null;
    };
  }, [videoId]);

  const togglePlay = () => {
    if (window.ytPlayer) {
      if (isPlaying) {
        window.ytPlayer.pauseVideo();
      } else {
        window.ytPlayer.playVideo();
      }
    }
  };

  return (
    <section id="about" className="bg-[rgba(239,238,236,1)] w-full overflow-hidden py-10">
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
                  onClick={togglePlay}
                >
                  {isPlaying ? "Pause Video" : "Watch Video"}
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <div className="relative aspect-video md:aspect-[16/9] w-full rounded-lg overflow-hidden">
              {/* YouTube player will be initialized in this container */}
              <div 
                ref={playerContainerRef}
                className="absolute inset-0 w-full h-full"
              />
              
              {/* Custom thumbnail overlay shown before playing */}
              {(!isPlaying || !iframeLoaded) && (
                <div className="absolute inset-0 z-10">
                  {/* Thumbnail image */}
                  <img 
                    src={thumbnailUrl} 
                    alt="Video thumbnail" 
                    className="absolute h-full w-full object-cover inset-0" 
                  />
                  
                  {/* Overlay and play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" 
                      onClick={togglePlay}
                    />
                    <button 
                      className="bg-white/90 hover:bg-white rounded-full p-5 transition-all duration-300 transform hover:scale-110 z-20"
                      onClick={togglePlay}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-10 h-10"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add YouTube API type definitions
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | null;
    ytPlayer: any;
  }
}
