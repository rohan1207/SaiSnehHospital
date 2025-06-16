import React, { useState, useEffect } from "react";
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
    name:"Mrs. Priya Kumbthekar",
    videoUrl: "https://www.youtube.com/embed/yJmdMiVMFwY?si=pQRwiLyGm4ozkRnt", // reused
  },
];

const PatientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
              <StoryCard story={stories[currentIndex]} tall />
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

  // Desktop view remains unchanged
  return (
    <section className="py-10 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        Patient Stories
      </h2>
      <div className="grid grid-cols-5 gap-4 max-w-7xl mx-auto">
        <div className="col-span-1 row-span-2">
          <StoryCard story={stories[0]} />
        </div>

        <div className="flex flex-col gap-4">
          <StoryCard story={stories[1]} />
          <StoryCard story={stories[5]} />
        </div>

        <div className="row-span-2">
          <StoryCard story={stories[2]} tall />
        </div>

        <div className="flex flex-col gap-4">
          <StoryCard story={stories[3]} />
          <StoryCard story={stories[6]} />
        </div>

        <div className="col-span-1 row-span-2">
          <StoryCard story={stories[4]} />
        </div>
      </div>
    </section>
  );
};

const StoryCard = ({ story, tall }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden w-full h-full group ${
        tall ? "h-[450px] md:h-[450px]" : "h-[220px]"
      }`}
    >
      <iframe
        src={story.videoUrl}
        title={story.title}
        className="w-full h-full object-cover"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 text-white text-left">
        <p className="font-semibold text-sm leading-tight">{story.title}</p>
        <p className="text-xs opacity-90">{story.name}</p>
      </div>
    </div>
  );
};

export default PatientStories;
