import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionReveal — High-Performance GPU-Accelerated Scroll Entrance
 * Smoothly fades in and slides content from left to right as sections enter viewport.
 * Uses Emil Kowalski's recommended editorial curve [0.16, 1, 0.3, 1].
 */
export default function SectionReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "100px 0px 0px 0px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`section-reveal-container w-full overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

