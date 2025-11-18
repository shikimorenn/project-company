import React from "react";
import { motion } from "framer-motion";
import musik from "../assets/musik.jpg";

export default function HeroSection() {
  return (
    <section
      id="Home"
      className="relative w-full h-screen bg-cover bg-center flex items-center px-10"
      style={{ backgroundImage: `url(${musik})` }}
    >
      <div className="relative z-50 max-w-3xl text-white mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-light mb-4"
        >
          The best audio systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-light leading-snug"
        >
          speak the language of the
          <br />
          experience they are
          <br />
          created for
        </motion.p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black from-10% via-black/60 via-30% to-black/20 to-90%"></div>
    </section>
  );
}
