import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  Clock,
} from "lucide-react";

const Footer = () => {
  const openingHours = [
    { day: "Mon", open: "09:00 AM", close: "09:30 PM" },
    { day: "Tue", open: "09:00 AM", close: "09:30 PM" },
    { day: "Wed", open: "09:00 AM", close: "09:30 PM" },
    { day: "Thu", open: "09:00 AM", close: "09:30 PM" },
    { day: "Fri", open: "09:00 AM", close: "09:30 PM" },
    { day: "Sat", open: "09:00 AM", close: "09:30 PM" },
    { day: "Sun", open: "Closed", close: "" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Hospital Info */}
          <div className="text-center sm:text-left">
            {" "}
            <img
              src="/footer_logo.png"
              alt="Sai Sneh Logo"
              className="h-30 w-40 mx-auto sm:mx-0 mb-6"
            />
            <p className="text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
              Sai Sneh is committed to providing world-class healthcare with a
              combination of experience, expertise, and excellence focused on
              patient care.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-6">
              <a
                href="https://www.facebook.com/saisnehhospital/"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/intent/post?text=Check%20out%20&url=https%3A%2F%2Fwww.saisnehhospital.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.youtube.com/watch?v=dtBqw8ICgDo"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/cws/share?url=https://www.saisnehhospital.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="text-center sm:text-left">
            <div className="relative">
              <div className="absolute -top-3 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center sm:justify-start gap-2">
                <Clock className="text-blue-500" size={20} />
                Opening Hours
              </h3>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-4 backdrop-blur-sm border border-gray-700/50">
              <div className="space-y-2">
                {openingHours.map((schedule, index) => (
                  <div
                    key={schedule.day}
                    className={`flex items-center justify-between py-2 ${
                      index !== openingHours.length - 1
                        ? "border-b border-gray-700/50"
                        : ""
                    }`}
                  >
                    <span className="font-medium text-white">
                      {schedule.day}
                    </span>
                    <span className="text-gray-400">
                      {schedule.open === "Closed" ? (
                        <span className="text-blue-500 font-medium">
                          Closed
                        </span>
                      ) : (
                        `${schedule.open} - ${schedule.close}`
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="flex items-center justify-center gap-2 text-blue-500">
                  <Phone size={16} className="animate-pulse" />
                  <span className="font-medium">Emergency: 24x7 Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section - Grid for Quick Links and Services */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">
                Quick Links
              </h3>
              <ul className="space-y-4 text-center sm:text-left">
                <li>
                  <a
                    href="/about"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/doctors"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Our Doctors
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Medical Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Patient Stories
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    News & Events
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">
                Our Services
              </h3>
              <ul className="space-y-4 text-center sm:text-left">
                <li>
                  <a
                    href="/services"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    General Medicine
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Cardiology
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Neurology
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Orthopedics
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    Diagnostic Center
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2 lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">
                Contact Us
              </h3>
              <ul className="space-y-4 max-w-md mx-auto sm:mx-0">
                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  {" "}
                  <MapPin
                    size={20}
                    className="text-blue-500 flex-shrink-0 mt-1"
                  />
                  <p className="text-sm text-center sm:text-left">
                    Pune-Satara Road, opp. PMT Bus Depot, Katraj Pune,
                    Maharashtra, India 411046
                  </p>
                </li>
                <li className="flex items-center gap-3 justify-center sm:justify-start">
                  <Phone size={20} className="text-blue-500 flex-shrink-0" />
                  <a
                    href="tel:+918048060580"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    +91 8048060580
                  </a>
                </li>
                <li className="flex items-center gap-3 justify-center sm:justify-start">
                  {" "}
                  <Mail size={20} className="text-blue-500 flex-shrink-0" />
                  <a
                    href="mailto:info@saisnehhospital.com"
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    info@saisnehhospital.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
