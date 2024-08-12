import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d0d0d] to-[#262626] text-gray-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white">Meditation Bliss</h3>
            <p className="text-sm italic mt-2">
              &quot;Find your peace within.&quot;
            </p>
            <p className="text-xs mt-2">
              Meditation Bliss offers guided meditation sessions to help you find tranquility and clarity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start space-x-6">
            <div className="flex flex-col text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
              <Link href="/" className="hover:text-green-300 transition duration-300">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-green-300 transition duration-300">
                About Us
              </Link>
              <Link href="/services" className="hover:text-green-300 transition duration-300">
                Services
              </Link>
              <Link href="/contact" className="hover:text-green-300 transition duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
            <p className="text-sm">Email: contact@meditationbliss.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Location: 123 Peaceful Lane, Serenity City</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <Link href="#" className="hover:text-green-300 transition duration-300" aria-label="Twitter">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.55 8.55 0 01-2.7 1.03A4.24 4.24 0 0015.5 4a4.25 4.25 0 00-4.25 4.25c0 .33.04.65.1.96A12.05 12.05 0 013 5.4a4.23 4.23 0 001.32 5.66 4.22 4.22 0 01-1.92-.53v.05a4.25 4.25 0 003.4 4.17 4.26 4.26 0 01-1.91.07 4.25 4.25 0 003.96 2.94A8.52 8.52 0 012 19.5a12.07 12.07 0 006.5 1.91c7.8 0 12.06-6.46 12.06-12.06 0-.18-.01-.37-.02-.55A8.63 8.63 0 0022.46 6z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="hover:text-green-300 transition duration-300" aria-label="Facebook">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.6 8.07 8 8.95v-6.3h-2.5V12h2.5v-1.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.8l-.4 2.7h-2.4v6.3c4.4-.9 8-4.6 8-8.95 0-5.52-4.48-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#" className="hover:text-green-300 transition duration-300" aria-label="Instagram">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2.16c-3.2 0-3.58.01-4.83.07-1.22.06-2.04.26-2.74.57-.74.33-1.38.78-2.03 1.42-.65.65-1.1 1.29-1.42 2.03-.31.7-.51 1.52-.57 2.74C2.17 8.58 2.16 8.96 2.16 12c0 3.2.01 3.58.07 4.83.06 1.22.26 2.04.57 2.74.33.74.78 1.38 1.42 2.03.65.65 1.29 1.1 2.03 1.42.7.31 1.52.51 2.74.57C15.58 2.17 15.2 2.16 12 2.16zm0 1.88c3.16 0 3.52.01 4.76.07 1.13.06 1.75.24 2.17.41.56.22.95.49 1.36.9.41.41.68.8.9 1.36.17.42.35 1.04.41 2.17.06 1.24.07 1.6.07 4.76 0 3.16-.01 3.52-.07 4.76-.06 1.13-.24 1.75-.41 2.17-.22.56-.49.95-.9 1.36-.41.41-.8.68-1.36.9-.42.17-1.04.35-2.17.41-1.24.06-1.6.07-4.76.07s-3.52-.01-4.76-.07c-1.13-.06-1.75-.24-2.17-.41-.56-.22-.95-.49-1.36-.9-.41-.41-.68-.8-.9-1.36-.17-.42-.35-1.04-.41-2.17C4.05 15.52 4.04 15.16 4.04 12c0-3.16.01-3.52.07-4.76.06-1.13.24-1.75.41-2.17.22-.56.49-.95.9-1.36.41-.41.8-.68 1.36-.9.42-.17 1.04-.35 2.17-.41 1.24-.06 1.6-.07 4.76-.07zm0 5.73c-2.25 0-4.08 1.83-4.08 4.08s1.83 4.08 4.08 4.08 4.08-1.83 4.08-4.08-1.83-4.08-4.08-4.08zm0 1.88c1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2zm4.31-3.31c-.7 0-1.22.57-1.22 1.22 0 .7.57 1.22 1.22 1.22.7 0 1.22-.57 1.22-1.22 0-.7-.57-1.22-1.22-1.22z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
