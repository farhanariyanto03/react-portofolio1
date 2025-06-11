import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.5,
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-gradient-to-r from-gray-500 to-gray-100 text-purple-600 font-bold text-xl rounded-xl flex items-center justify-center">
            M
          </div>
          <span className="text-xl bg-gradient-to-r from-gray-300 to-gray-100 font-bold text-transparent bg-clip-text">
            My Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              href="#"
              className="group text-gray-200 font-medium transition-all duration-300 relative"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Social Icons (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            {[FiGithub, FiLinkedin, FiInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.3 + i * 0.1,
                }}
                href="#"
                className="text-gray-300 hover:text-violet-600 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Hire Me Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="px-4 py-1 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 font-bold text-violet-600 hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300 hidden sm:inline-block"
          >
            Hire Me
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
          whileInView={{ scale: 1 }}
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white px-6 py-8 z-40 shadow-lg flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="h-10 w-10 bg-gradient-to-r from-gray-500 to-gray-100 text-purple-600 font-bold text-xl rounded-xl flex items-center justify-center">
              M
            </div>
            {/* <button onClick={toggleMenu} className="text-white">
              <FiX className="text-2xl" />
            </button> */}
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-violet-500 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8">
            {[FiGithub, FiLinkedin, FiInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-violet-500 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Hire Me Button */}
          <button className="mt-6 w-full px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 font-bold text-violet-600 hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300">
            Hire Me
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
