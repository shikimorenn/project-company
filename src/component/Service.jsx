import React from "react";
import { motion } from "framer-motion";
import service1 from "../assets/services1.jpeg";
import service2 from "../assets/services2.jpeg";
import service3 from "../assets/services3.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const popUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Service = () => {
  return (
    <section
      id="services"
      className="w-full bg-black text-white px-10 md:px-20 py-20"
    >
      <div className="flex items-start gap-6 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="h-[2px] w-14 bg-white/50"></span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h2 className="text-2xl font-semibold tracking-wide">Services</h2>
          <p className="text-gray-300 mt-3 max-w-xs">
            Turn your needs into perfectly crafted solutions. Here are some of
            the services we provide.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[service1, service2, service3].map((service, index) => (
          <motion.div
            key={index}
            variants={popUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="cursor-pointer"
          >
            <img
              src={service}
              alt="service"
              className="w-full h-[350px] object-cover"
            />

            <h3 className="text-lg font-semibold mt-5">
              {
                [
                  "Audio System Equipment Rental",
                  "Professional Music & Audio Production",
                  "Active Speaker Kit Audio System",
                ][index]
              }
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              {
                [
                  "Experience superior sound quality with S.Audio’s premium equipment and professional crew, ensuring your event runs smoothly and leaves a lasting impression.",
                  "Create your best audio work with S.Audio’s music production, mixing, mastering, and professional crew services supported by modern technology and experience.",
                  "A practical and powerful solution for your audio needs. Designed for easy use, delivering clear sound and durability for indoor and outdoor events.",
                ][index]
              }
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
