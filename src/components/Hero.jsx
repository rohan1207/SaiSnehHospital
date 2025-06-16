import { Link } from "react-router-dom";

import {
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlinePhone,
  HiOutlineHeart,
} from "react-icons/hi";

const Hero = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:8008280020";
  };

  return (
    <div className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-[#f04e30]/5 to-white">
      {/* <SearchBar /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 transition-all duration-500 ease-out">
            <div className="space-y-3 lg:space-y-4">
              <span className="flex items-center px-3 sm:px-4 py-1.5 bg-[#f04e30]/10 text-[#f04e30] rounded-full text-xs sm:text-sm font-medium transition-all duration-300">
                <HiOutlineHeart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Best Multispecialty Hospital in Pune
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-300">
                Your Health Is Our{" "}
                <span className="text-[#f04e30]">Top Priority</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed transition-all duration-300">
                Providing world-class healthcare with a compassionate touch. Our
                team of expert doctors and state-of-the-art facilities ensure
                you receive the best medical care possible.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 transition-all duration-300">
              <Link
                to="/book-appointment"
                className="bg-[#f84a3e] hover:bg-[#f63827] text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <HiOutlineCalendar className="h-6 w-6" />
                Book Appointment
              </Link>
              <a
                href="tel:8008280020"
                className="border-2 border-[#f84a3e] text-[#f84a3e] hover:bg-red-50 px-8 py-4 rounded-lg flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
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
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8 transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#f04e30]">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#f04e30]">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Expert Doctors
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#f04e30]">
                  50k+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Happy Patients
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-6 lg:mt-0 transition-all duration-500 ease-out">
            <div className="relative z-10">
              <img
                src="/owner.jpeg"
                alt="Doctor and Patient"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg max-w-[calc(100%-2rem)] transition-all duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 bg-[#f04e30]/10 rounded-lg">
                    <HiOutlineUserGroup className="w-5 h-5 sm:w-6 sm:h-6 text-[#f04e30]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                      24/7 Support
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">
                      Always here for you
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-full h-full bg-[#f04e30]/10 rounded-xl sm:rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#f04e30]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#f04e30]/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Hero;
