import React from "react";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <section
      id="about"
      className="w-full bg-black text-white py-32 px-8 md:px-20"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        <motion.div
          className="flex items-center gap-4 min-w-max"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-[2px] bg-gray-500"></div>
          <p className="text-lg font-medium whitespace-nowrap">Who are we</p>
        </motion.div>
        <motion.p
          className="text-3xl md:text-5xl font-light leading-snug md:leading-[1.3] max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          S.Audio is an audio system company that helps people discover the soul
          of their spaces by revealing the sound, emotion, and character within
          every environment.
        </motion.p>
      </div>
    </section>
  );
};

export default Section;
