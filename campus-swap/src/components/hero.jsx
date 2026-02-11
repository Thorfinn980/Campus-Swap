import React from 'react';
import { motion } from 'motion/react';
import './Hero.css';

export function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero__title"
          >
            <span className="hero__title-line">Buy & Sell on Campus</span>
            <span className="hero__title-line hero__title-line--accent">Safe. Easy. Local.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero__subtitle"
          >
            The trusted marketplace for university students. Find cheap textbooks,
            furniture, and electronics from people you know.
          </motion.p>
        </div>
      </div>

      {/* Decorative background pattern */}
      <div className="hero__pattern">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern
              id="hero-pattern"
              x="0" y="0" width="20" height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#hero-pattern)" />
        </svg>
      </div>
    </div>
  );
}