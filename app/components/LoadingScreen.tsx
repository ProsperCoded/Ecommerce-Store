"use client";

import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Remove unused animation variant

export const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: [0.25, 0.1, 0.25, 1]
              }
            }
          }}
          className="w-4 h-4 rounded-full bg-primary"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: [0.25, 0.1, 0.25, 1]
              }
            }
          }}
          className="w-4 h-4 rounded-full bg-primary"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: [0.25, 0.1, 0.25, 1]
              }
            }
          }}
          className="w-4 h-4 rounded-full bg-primary"
        />
      </motion.div>
    </div>
  );
};
