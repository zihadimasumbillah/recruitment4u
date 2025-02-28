"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ArrowUpButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        // Calculate scroll progress
        const totalHeight = 
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(100, (window.scrollY / totalHeight) * 100);
        setScrollProgress(progress);

        // Show button after scrolling down 100px
        setShowButton(window.scrollY > 100);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-50",
            "w-12 h-12 rounded-full",
            "bg-white shadow-xl", // Increased shadow
            "flex items-center justify-center",
            "cursor-pointer",
            "overflow-hidden"
          )}
        >
          {/* Water filling effect with primary-secondary color */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-primary-secondary/20"
            initial={{ height: "0%" }}
            animate={{ height: `${scrollProgress}%` }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          />

          {/* Arrow icon */}
          <ArrowUp className="w-6 h-6 text-primary z-10 transition-transform duration-300 hover:-translate-y-1" />

          {/* Border animation */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ArrowUpButton;
