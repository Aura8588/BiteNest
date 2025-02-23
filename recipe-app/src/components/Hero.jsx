import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import "../components/Hero.css"; // ✅ Correct path since the file is in components

import heroImage from "../assets/hero-image.jpg"; // ✅ Ensure correct image path

const Hero = () => {
  return (
    <section className="hero">
      {/* ✅ Animated Text Section */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Your Daily Dish <br /> A <span className="highlight-text">Food</span> Journey</h1>
        <p>Share your delicious recipes with the world and explore amazing dishes from others.</p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Share Your Recipes
        </motion.button>
      </motion.div>

      {/* ✅ Animated Image Section */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
<img src={heroImage} alt="Delicious Food" loading="lazy" />
</motion.div>
    </section>
  );
};

export default Hero;
