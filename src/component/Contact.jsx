import React from "react";
import images from "../assets/saudiobahanhok.jpeg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#DA5A42] text-white px-6 sm:px-10 md:px-20 py-16 md:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* IMAGE POP UP */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={images}
            alt="event"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* TEXT FADE UP */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* GARIS + TITLE */}
          <motion.div
            className="flex items-center gap-3 mb-4 md:mb-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="h-[2px] w-14 bg-white"></span>
            <span className="text-lg font-medium">Contact Us</span>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold leading-snug mb-4 md:mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let’s make your event unforgettable.
          </motion.h2>

          <motion.p
            className="text-sm md:text-base max-w-md text-white/90"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Great events need more than a concept—they need the right sound to
            bring every moment to life. We support you at every step to ensure
            your occasion is powered by clear, immersive, and reliable audio.
          </motion.p>

          <motion.p
            className="text-sm md:text-base mt-3 md:mt-4 text-white/90"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The perfect sound for your event is just a call away.
          </motion.p>

          {/* BUTTON FADE UP */}
          <motion.a
            href="#footer"
            className="inline-block mt-6 md:mt-8 px-8 py-3 border border-white rounded-md 
             hover:bg-white hover:text-red-400 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            viewport={{ once: true }}
          >
            Contact us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
