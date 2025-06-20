import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    title: "Sai Sneh Hospital Testimonial 1",
    name: "Mr. Chankad",
    videoUrl: "https://www.youtube.com/embed/XHAeCXCI9BU?si=fA4Aiw8ZJO3Qm5Lz",
  },
  {
    title: "Sai Sneh Hospital Testimonial 2",
    name: "Mr. Sachin Shitole",
    videoUrl: "https://www.youtube.com/embed/YkdQj2Ys_PI",
  },
  {
    title: "Sai Sneh Hospital Testimonial 3",
    name: "Mr. Shrikrishn Shitole",
    videoUrl: "https://www.youtube.com/embed/Yj8f24ORBow",
  },
  {
    title: "Sai Sneh Hospital Testimonial 4",
    name: "Miss. Suchita Sharma",
    videoUrl: "https://www.youtube.com/embed/Xh92HHffzr0",
  },
  {
    title: "Sai Sneh Hospital Testimonial 5",
    name: "Miss. Vipula Goyal",
    videoUrl: "https://www.youtube.com/embed/H7Ig5Oo6mP4",
  },
  {
    title: "Sai Sneh Hospital Testimonial 6",
    name: "Mr. Rajaram Veer",
    videoUrl: "https://www.youtube.com/embed/wG8gmzVxMp0", // reused
  },
  {
    title: "Sai Sneh Hospital Testimonial 7",
    name: "Mrs. Priya Kumbthekar",
    videoUrl: "https://www.youtube.com/embed/yJmdMiVMFwY?si=pQRwiLyGm4ozkRnt", // reused
  },
];

const PatientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide for mobile
  useEffect(() => {
    if (!isMobile) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isMobile]);

  // Handle manual navigation
  const handleDragEnd = (event, info) => {
    if (!isMobile) return;

    const swipe = info.offset.x;
    if (Math.abs(swipe) > 50) {
      if (swipe > 0) {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
      }
    }
  };

  if (isMobile) {
    return (
      <section className="py-10 px-4 bg-white text-center overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Patient Stories
        </h2>
        <div className="relative w-full h-[300px] mx-auto">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              <StoryCard 
                story={stories[currentIndex]} 
                isActive={activeVideo === currentIndex}
                onPlay={() => setActiveVideo(currentIndex)}
                onPause={() => setActiveVideo(null)}
                tall 
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#f04e30] w-4" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  // Desktop view
  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Patient Stories
          </h2>
          <p className="text-gray-600">
            Real experiences shared by our valued patients about their journey to better health
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[250px]">
          {/* Featured Story - Large */}
          <div className="lg:col-span-2 lg:row-span-2">
            <StoryCard
              story={stories[0]}
              isActive={activeVideo === 0}
              onPlay={() => setActiveVideo(0)}
              onPause={() => setActiveVideo(null)}
              featured
            />
          </div>

          {/* Regular Stories - Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
            {stories.slice(1, 4).map((story, index) => (
              <div key={index + 1}>
                <StoryCard
                  story={story}
                  isActive={activeVideo === index + 1}
                  onPlay={() => setActiveVideo(index + 1)}
                  onPause={() => setActiveVideo(null)}
                />
              </div>
            ))}
          </div>

          {/* Bottom Row Stories */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {stories.slice(4).map((story, index) => (
              <div key={index + 4}>
                <StoryCard
                  story={story}
                  isActive={activeVideo === index + 4}
                  onPlay={() => setActiveVideo(index + 4)}
                  onPause={() => setActiveVideo(null)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StoryCard = ({ story, isActive, onPlay, onPause }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const message = isActive ? "play" : "pause";
      iframeRef.current.contentWindow.postMessage(
        `{"event":"command","func":"${message}Video","args":""}`,
        "*"
      );
    }
  }, [isActive]);

  return (
    <div className="group relative w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <iframe
        ref={iframeRef}
        src={`${story.videoUrl}?enablejsapi=1&rel=0&modestbranding=1`}
        title={story.title}
        className="w-full h-full object-cover"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onPlay={() => onPlay()}
        onPause={() => onPause()}
      ></iframe>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-semibold text-sm leading-tight mb-1">
          {story.title}
        </p>
        <p className="text-xs opacity-90">{story.name}</p>
      </div>
    </div>
  );
};

export default PatientStories;
