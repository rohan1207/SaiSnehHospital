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
    "/hospital1.jpg",
    "/hospital2.png",
    "/bed.avif",
    "/operation1.avif",
    "/operation2.avif",
    "/operation6.jpg",
    "/operation7.jpg",
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
    <div className="relative pt-20 lg:pt-40 pb-24 lg:pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 transition-all duration-500 ease-out order-2 lg:order-1">
            <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 bg-blue-100/80 text-blue-600 rounded-full text-xs sm:text-sm font-medium transition-all duration-300">
                <HiOutlineHeart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Best Multispecialty Hospital in Pune
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-300">
                Your Health Is Our{" "}
                <span className="text-blue-600">Top Priority</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed transition-all duration-300">
                Providing world-class healthcare with a compassionate touch. Our
                team of expert doctors and state-of-the-art facilities ensure
                you receive the best medical care possible.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-300">
              <Link
                to="/book-appointment"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <HiOutlineCalendar className="h-5 w-5 sm:h-6 sm:w-6" />
                Book Appointment
              </Link>
              <a
                href="tel:8008280020"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                onClick={(e) => {
                  if (!/mobile|android|iphone/i.test(navigator.userAgent)) {
                    e.preventDefault();
                    handleEmergencyCall();
                  }
                }}
              >
                <HiOutlinePhone className="h-5 w-5 sm:h-6 sm:w-6" />
                Emergency Call
              </a>
            </div>{" "}
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 sm:pt-6 lg:pt-8 transition-all duration-300">
              <div className="text-center p-2 sm:p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  15+
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center p-2 sm:p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  100+
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">
                  Expert Doctors
                </div>
              </div>
              <div className="text-center p-2 sm:p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  50k+
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">
                  Happy Patients
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Image Slider */}
          <div className="relative order-1 lg:order-2 transition-all duration-500 ease-out">
            <div className="relative z-10 mx-auto max-w-[280px] lg:max-w-[520px] sm:max-w-none">
              <div className="aspect-square lg:aspect-[5.4/5] overflow-hidden rounded-2xl bg-white p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {hospitalImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Hospital view ${index + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {hospitalImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex === index 
                            ? 'bg-blue-600 w-4' 
                            : 'bg-white/70 hover:bg-white'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 left-0 right-0 mx-auto w-max bg-white p-3 rounded-xl shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <HiOutlineUserGroup className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      24/7 Support
                    </div>
                    <div className="text-xs text-gray-500">
                      Always here for you
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-2 -right-2 left-2 w-[95%] h-[95%] bg-blue-100/50 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-16 w-40 h-40 sm:w-64 sm:h-64 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-16 w-40 h-40 sm:w-64 sm:h-64 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Hero;
