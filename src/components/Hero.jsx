import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlinePhone,
  HiOutlineHeart,
} from "react-icons/hi";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleEmergencyCall = () => {
    window.location.href = "tel:8008280020";
  };

  const hospitalImages = [
    "/hospital1.jpg", // Start with the main hospital exterior
    "/hospital2.png", // Another view of the hospital exterior
    "/operation1.avif", // High-quality operation theater
    "/bed.avif", // Modern hospital room
    "/operation2.avif", // Another operation theater view
    "/operation6.jpg", // Medical procedure
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === hospitalImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {hospitalImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                src={image}
                alt={`Hospital view ${index + 1}`}
                className="w-full h-full object-cover object-center"
                style={{
                  imageRendering: "crisp-edges",
                }}
              />
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"
              style={{
                backdropFilter: "none",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <span className="inline-flex items-center px-3 py-1.5 bg-blue-600/20 text-blue-200 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-blue-400/20">
                <HiOutlineHeart className="w-4 h-4 mr-1.5" />
                Best Multispecialty Hospital in Pune
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Your Health Is Our{" "}
                <span className="text-blue-400">Top Priority</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Providing world-class healthcare with a compassionate touch. Our
                team of expert doctors and state-of-the-art facilities ensure
                you receive the best medical care possible.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/book-appointment"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 py-3 rounded-full flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-blue-500/25 text-sm sm:text-base font-medium backdrop-blur-sm"
              >
                <HiOutlineCalendar className="h-5 w-5" />
                Book Appointment
              </Link>
              <a
                href="tel:8008280020"
                className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-6 sm:px-7 py-3 rounded-full flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base font-medium backdrop-blur-sm"
                onClick={(e) => {
                  if (!/mobile|android|iphone/i.test(navigator.userAgent)) {
                    e.preventDefault();
                    handleEmergencyCall();
                  }
                }}
              >
                <HiOutlinePhone className="h-6 w-6" />
                Emergency Call
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
              <div className="text-center p-3 sm:p-5 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center p-3 sm:p-5 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">
                  Expert Doctors
                </div>
              </div>
              <div className="text-center p-3 sm:p-5 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                  50k+
                </div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">
                  Happy Patients
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Features Cards */}
          <div className="relative lg:order-2 hidden lg:block">
            <div className="grid grid-cols-1 gap-6">
              {/* Feature Card 1 */}
              <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                    <HiOutlineUserGroup className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      24/7 Patient Care
                    </h3>
                    <p className="text-gray-300">
                      Round-the-clock medical support with dedicated healthcare
                      professionals
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                    <HiOutlineHeart className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Expert Medical Team
                    </h3>
                    <p className="text-gray-300">
                      Skilled specialists committed to delivering exceptional
                      healthcare services
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="group p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                    <HiOutlinePhone className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Emergency Services
                    </h3>
                    <p className="text-gray-300">
                      Quick response times and immediate medical attention when
                      you need it most
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {hospitalImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-blue-500 w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
