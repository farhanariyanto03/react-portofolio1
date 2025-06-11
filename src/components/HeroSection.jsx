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
            className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-10 text-white"
          >
            Building Fast <br /> Realible Result
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
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            tempora impedit explicabo, vero reprehenderit quas libero animi
            commodi nostrum quisquam soluta sequi neque facere, nobis accusamus
            sapiente dolores. Perferendis, in.
          </motion.p>
        </div>
      </div>

      {/* Right content */}
      <Spline className="absolute xl:right-[-28%] md:right-[-10%] w-[100%] h-[100%]" scene="https://prod.spline.design/FyXrV7scpdojLuv5/scene.splinecode" />
    </section>
  );
};

export default HeroSection;
