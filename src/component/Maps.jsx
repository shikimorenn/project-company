import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Maps = () => {
  return (
    <div className="w-full bg-black py-16" id="map">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-red-600 text-2xl font-semibold mb-10"
      >
        S.Audio Location
      </motion.h1>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-7xl mx-auto h-[600px] rounded-xl overflow-hidden"
      >
        <iframe
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.59750309764513!2d106.8460466950142!3d-6.42230360589379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb0052b29949%3A0x54d68ff8493a4add!2sPermata%20duta!5e0!3m2!1sid!2sid!4v1763398180193!5m2!1sid!2sid"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Maps;
