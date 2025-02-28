import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ImageFrameBorder } from "@/animation/imageframeborder";

const Hero = () => {
  return (
    <section className={cn(
      "relative flex items-center overflow-hidden",
      "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32", 
      "bg-primary w-screen",
      "left-[50%] right-[50%] mx-[-50vw] px-0",
      "min-h-[100vh]", 
      "-mt-20" 
    )}>
      <div className="container mx-auto px-4 pt-12 sm:pt-16 md:pt-20 lg:pt-24 w-full"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center"> 
          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut",
              delay: 0.6 
            }}
            className={cn(
              "relative w-full",
              "max-w-[220px] xs:max-w-[260px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[550px]", 
              "aspect-square",
              "mx-auto",
              "order-1 lg:order-2",
              "-mt-6 sm:mt-0 mb-6 sm:mb-0" 
            )}
          >
            <ImageFrameBorder />
          </motion.div>

          {/* Content - Left Side */}
          <div className="order-2 lg:order-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.7, 
                ease: "easeOut", 
                delay: 0.4 
              }}
              className="space-y-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 
                }}
                className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              >
                We connect the right workers with the right employers.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 
                }}
                className="text-sm sm:text-base lg:text-lg text-black max-w-xl"
              >
                Find the perfect match for your business needs or career goals
                with our comprehensive platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 
                }}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2 sm:pt-4"
              >
                {/* Left Button */}
                <motion.button
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-4 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold", 
                    "bg-primary-secondary text-primary",
                    "transform transition-all duration-200",
                    "text-xs sm:text-sm lg:text-base",
                    "hover:bg-primary-secondary/90"
                  )}
                >
                  Looking for Workers
                </motion.button>

                {/* Right Button */}
                <motion.button
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-4 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold", 
                    "bg-primary text-white",
                    "border-2 border-primary-secondary",
                    "transform transition-all duration-200",
                    "text-xs sm:text-sm lg:text-base",
                    "hover:bg-primary-secondary/10"
                  )}
                >
                  Looking for an Employer
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
