import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black bg-cover bg-no-repeat flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        {/* left content */}
        <div className="z-40 xl:mb-0 mb-[20%]">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              duration: 1.5,
              delay: 1.3,
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-10 bg-gradient-to-r from-violet-500 to-yellow-500 text-transparent bg-clip-text"
          >
            Building Fast <br /> Reliable Result
          </motion.h1>
          <motion.p 
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.8,
            delay: 1.5,
          }}
          className="text-xl md:text-lg lg:text-md text-purple-100 max-w-2xl font-medium z-10">
            We help you build fast and reliable results, allowing you to focus on
            what matters most - growing your business. Our team of experts will
            work with you to understand your needs and develop a solution that
            meets your goals. With our expertise and technology, you can trust
            that your project will be completed quickly and to the highest
            standards.
          </motion.p>
        </div>
      </div>

      {/* Right content */}
      <Spline
       className="absolute xl:right-[-28%] md:right-[-10%] sm:right-[-20%] w-[100%] h-[100%] sm:w-[50%] sm:h-[50%]" scene="https://prod.spline.design/FyXrV7scpdojLuv5/scene.splinecode" />
    </section>
  );
};

export default HeroSection;
