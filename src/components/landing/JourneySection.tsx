import { useState, useRef, useEffect } from "react";
import { useClickAway } from "react-use";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

// Define proper TypeScript interfaces
interface MediaItem {
  id: number;
  type: "image" | "video";
  imageUrl: string;
  videoId?: string;
  title?: string;
  size?: "small" | "medium" | "large" | "tall"; // Added 'tall' variant for bento grid
  mobilePriority?: number; // Add priority for mobile layout
}

const mediaData: MediaItem[] = [
  {
    id: 1,
    type: "image",
    imageUrl: "../images/thumb.jpg",
    size: "small",
    mobilePriority: 1,
  },
  {
    id: 2,
    type: "video",
    imageUrl: "https://img.youtube.com/vi/ZV2Q_06d2Tk/maxresdefault.jpg",
    videoId: "ZV2Q_06d2Tk",
    title: "GTech Marathon 2023",
    size: "medium",
    mobilePriority: 2,
  },
  {
    id: 3,
    type: "image",
    imageUrl: "../images/thumb height.jpg",
    size: "tall", // Changed from 'large' to 'tall'
  },
  {
    id: 4,
    type: "video",
    imageUrl: "https://img.youtube.com/vi/iehEt0AKMRs/maxresdefault.jpg",
    videoId: "iehEt0AKMRs",
    title: "GTECH Marathon 2024 - Highlights",
    size: "medium",
  },
  {
    id: 5,
    type: "image",
    imageUrl: "../images/5.jpg",
    size: "small",
  },
  {
    id: 6,
    type: "image",
    imageUrl: "../images/thumb3.jpg",
    size: "small",
  },
  {
    id: 7,
    type: "image",
    imageUrl: "../images/thumb4.jpg",
    size: "small",
  },
  {
    id: 8,
    type: "video",
    imageUrl: "https://img.youtube.com/vi/6XIAABol4dI/maxresdefault.jpg",
    videoId: "6XIAABol4dI",
    title: "GTech Marathon Highlights 2025",
    size: "small",
  },
  {
    id: 9,
    type: "image",
    imageUrl: "../images/thumb6.jpg",
    size: "small",
  },
];

export default function JourneySection(): JSX.Element {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // mobile
        setItemsPerPage(4);
      } else if (window.innerWidth < 1024) {
        // tablet
        setItemsPerPage(6);
      } else {
        // desktop
        setItemsPerPage(9);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Recalculate pagination values
  const totalPages = Math.ceil(mediaData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = mediaData.slice(startIndex, startIndex + itemsPerPage);

  // Add these new navigation functions for media items
  const navigateMedia = (direction: "prev" | "next") => {
    if (!selectedMedia) return;

    const currentIndex = mediaData.findIndex(
      (item) => item.id === selectedMedia.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : mediaData.length - 1;
    } else {
      newIndex = currentIndex < mediaData.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedMedia(mediaData[newIndex]);
  };

  // Modify the existing keyboard navigation effect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMedia) {
        // Handle navigation when modal is open
        if (e.key === "ArrowLeft") {
          navigateMedia("prev");
        } else if (e.key === "ArrowRight") {
          navigateMedia("next");
        } else if (e.key === "Escape") {
          closeMediaPopup();
        }
      } else {
        // Handle page navigation when modal is closed
        if (e.key === "ArrowLeft") {
          handlePrevPage();
        } else if (e.key === "ArrowRight") {
          handleNextPage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, currentPage]);

  // Navigation functions
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const openMediaPopup = (item: MediaItem): void => {
    setSelectedMedia(item);
  };

  const closeMediaPopup = (): void => {
    setSelectedMedia(null);
  };

  // Update size classes function with better mobile handling
  const getSizeClasses = (size: string = "medium", index: number) => {
    const mobileClasses = {
      small: "col-span-2 sm:col-span-1",
      medium: "col-span-2",
      large: "col-span-2",
      tall: "col-span-2 row-span-2",
    };

    const desktopClasses = {
      small: "md:col-span-1 md:row-span-1",
      medium: "md:col-span-2 md:row-span-1",
      large: "md:col-span-2 md:row-span-2",
      tall: "md:col-span-1 md:row-span-2",
    };

    // First three items special layout for mobile
    const mobileSpecialClasses = {
      0: "col-span-2 row-span-2", // First item full width and tall
      1: "col-span-2 sm:col-span-1", // Second item
      2: "col-span-2 sm:col-span-1", // Third item
    };

    return `
      ${index in mobileSpecialClasses ? mobileSpecialClasses[index] : mobileClasses[size]} 
      ${desktopClasses[size]}
      relative group cursor-pointer rounded-lg overflow-hidden bg-muted
    `;
  };

  // Close popup when clicking outside
  useClickAway(modalRef, closeMediaPopup);

  return (
    <section className="bg-gradient-to-b from-background to-background/95 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 animate-fadeIn">
          <span className="font-normal">Our Journey</span>: From Darkness to Light
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 animate-fadeIn delay-100">
          Witness the transformation journey from the challenges of substance
          abuse to the empowerment of creative engagement through photos and
          videos.
        </p>

        {/* Bento Grid Gallery */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: item.id * 0.05 }}
                className={getSizeClasses(item.size, index)}
                onClick={() => openMediaPopup(item)}
                style={{
                  minHeight: (() => {
                    if (window.innerWidth < 768) {
                      // Mobile heights
                      if (index === 0) return "400px";
                      if (item.size === "tall") return "400px";
                      return "200px";
                    } else {
                      // Desktop heights
                      if (item.size === "tall" || item.size === "large")
                        return "512px";
                      return "250px";
                    }
                  })(),
                  order:
                    window.innerWidth < 768
                      ? item.mobilePriority || 99
                      : "initial",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title || "Gallery media"}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-100 group-hover:bg-black/50 transition-all duration-300">
                  {item.type === "video" && (
                    <>
                      {/* Permanent Play Button (smaller for non-hover) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 group-hover:w-12 group-hover:h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                          <Play className="h-5 w-5 group-hover:h-6 group-hover:w-6 text-white fill-white" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Title for all items */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs sm:text-sm font-medium line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Pagination Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`bg-black/30 backdrop-blur-sm text-white p-2 rounded-lg transition-all flex items-center gap-1
                    ${
                      currentPage === 0
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-black/50"
                    }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
                <span className="text-sm hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center px-4 py-2 bg-black/20 backdrop-blur-sm rounded-lg">
                <span className="text-sm text-white">
                  Page {currentPage + 1} of {totalPages}
                </span>
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className={`bg-black/30 backdrop-blur-sm text-white p-2 rounded-lg transition-all flex items-center gap-1
                    ${
                      currentPage === totalPages - 1
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-black/50"
                    }`}
                aria-label="Next page"
              >
                <span className="text-sm hidden sm:inline">Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Media Popup Modal */}
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm"
          >
            <div
              ref={modalRef}
              className="relative w-[90vw] h-[90vh] md:w-[80vw] md:h-[80vh] bg-black/40 rounded-xl overflow-hidden"
            >
              <button
                onClick={closeMediaPopup}
                className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.imageUrl}
                    alt="Gallery image"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedMedia.videoId}`}
                      title={selectedMedia.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}